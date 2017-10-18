'use strict';

const canFinish = (numCourses, prerequisites) => {

    let indegrees = new Map();
    let courseMap = new Map();

    //  initialize the indegree, courseMap for each course
    for (let course = 0; course < numCourses; course++){
        indegrees.set(course, 0);
        courseMap.set(course, []);
    }
    // calculate the indegree and nextCourses for each course.

    prerequisites.forEach((coursePair) => {
        let pre = coursePair[1];
        let course = coursePair[0];
        indegrees.set(course, indegrees.get(course) + 1);
        courseMap.get(pre).push(course);
    });
    // get all course, whose indegre is 0
    let pres = [];
    indegrees.forEach((indegree, course) => {
        if (indegree === 0) {
            pres.push(course);
        }
    });

    //  BFS
    if (pres.length === 0) {
        return false;
    }
    let queue = pres;
    let count = 0;

    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let course = queue.shift();
            count ++;
            courseMap.get(course).forEach((nextCourse) => {
                indegrees.set(nextCourse, indegrees.get(nextCourse) - 1);
                if (indegrees.get(nextCourse) === 0) {
                    queue.push(nextCourse);
                }
            });
        }
    }
    return count === numCourses;
};


// const main = () => {
//     let numCourses, prerequisites;
//     numCourses = 2;
//     prerequisites = [[1, 0]];
//     console.log(canFinish(numCourses, prerequisites));
//
//     numCourses = 2;
//     prerequisites = [[1, 0], [0, 1]];
//     console.log(canFinish(numCourses, prerequisites));
// };
// main();
