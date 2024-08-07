import { GlobalStyle } from '../globalStylization/GlobalStyle';
import { TaskList } from '../components/taskList/taskList';

import { useSelector, useDispatch } from 'react-redux';
import { selectTask, selectError, selectIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchTasks } from '../redux/operators';
import { MagnifyingGlass } from 'react-loader-spinner';

import TemporaryDrawer from '../components/swipeableEdgeDrawer/SwipeableEdgeDrawer';
import { Container, DrawlerBtn, Loader } from './AppStyled';

export const App = () => {
  const allTasks = useSelector(selectTask);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Container>
      
      <DrawlerBtn><TemporaryDrawer /></DrawlerBtn>

        {isLoading && !error && (
          <Loader>
            <MagnifyingGlass
              visible={true}
              height="120"
              width="120"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#3d9bba"
              color="#0f0d0d"
            />
          </Loader>
        )}

{allTasks.length > 0 ? (
      <div>
        <TaskList />
      </div>
    ) : (
      <h2>Add Your first task</h2>
    )}
        
      
      <GlobalStyle />
    </Container>
  );
};
