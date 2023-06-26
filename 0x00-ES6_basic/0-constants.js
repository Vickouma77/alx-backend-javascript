function taskFirst() {
    const task = 'I prefer const when I can.';

    return task;
}

function taskNext() {
    let task = 'I prefer const when I can.';

    return task;
}

export {taskFirst, taskNext};