import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Button,
  ErrorMessageStyled,
  FieldGroup,
  FieldStyled,
  FormStyled,
} from './taskFormStyled';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/operators';
// import Notiflix from 'notiflix';




const taskSchema = Yup.object().shape({
  text: Yup.string()
    // .matches(/^[^!]*$/, 'The task cannot contain the "!" character.')
    .required('Required'),
});

export const TaskForm = ({ parentId, subLevel, onClose }) => {  
  const dispatchTask = useDispatch();

  const onAdd = (values, actions) => {
    // if (values.text.includes('!')) {
    //   Notiflix.Notify.failure('The task field cannot contain "!" character.');
    //   return;
    // }
    if (!parentId){
      parentId = "0";
      subLevel = 0 }
      else{
       subLevel+=1; 
      };
    
    const newTask = {
      text: values.text,
      date: new Date().toISOString(), 
      parentId: parentId,
      subLevel: subLevel,
    };
    
    dispatchTask(addTask(newTask));
    actions.resetForm();
    if (onClose) {  
      onClose();  
    }
   
    
  };
  return (
    <Formik
      initialValues={{
        text: '',
        date: new Date()
      }}
      validationSchema={taskSchema}
      onSubmit={onAdd}
    >
      <FormStyled>
        <FieldGroup>
          
          <FieldStyled name="text" type="text" placeholder="Insert your task here" />
          <ErrorMessageStyled name="text" component="span" />
        </FieldGroup>

        <Button type="submit">Add Task</Button>
      </FormStyled>
    </Formik>
  );
};
