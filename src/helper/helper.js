//  parentId grouping func
export const groupTasksByParentId = tasks => {
  const taskMap = {};
  tasks.forEach(task => {
    if (!taskMap[task.parentId]) {
      taskMap[task.parentId] = [];
    }
    taskMap[task.parentId].push(task);
  });
  return taskMap;
};

//  time formatting func

export function formatToString(date) {
  const actualDate = new Date(date);

  actualDate.setMilliseconds(0);

  const year = actualDate.getFullYear();
  const month = String(actualDate.getMonth() + 1).padStart(2, '0');
  const day = String(actualDate.getDate()).padStart(2, '0');
  const hour = String(actualDate.getHours()).padStart(2, '0');
  const minute = String(actualDate.getMinutes()).padStart(2, '0');
  const second = String(actualDate.getSeconds()).padStart(2, '0');

  const pickedDate = `${day}-${month}-${year}   ${hour}:${minute}:${second}`;
  return pickedDate;
}

//  random color for level stylization func

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//  unic colors for subtask level assignment func

const colorMap = {};

export const getColorForLevel = level => {
  if (!colorMap[level]) {
    colorMap[level] = getRandomHexColor();
  }

  return colorMap[level];
};


//  root perent element searching func

export const rootEl = tasks => {
  const idArr = [];
  tasks.forEach(task => {
    idArr.push(task.parentId);
  });
  idArr.sort((a, b) => a - b);

  return idArr[0] !== undefined ? idArr[0] : null;
};
