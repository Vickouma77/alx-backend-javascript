export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  if (trueOrFalse) {
    const taskInner = true;
    const task2Inner = false;
    return [taskInner, task2Inner];
  }
  return [task, task2];
}
