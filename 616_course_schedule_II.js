'use strict';
const findOrder = (numCourses, prerequisites) => {
    let courseMap = new Map();
    let indegrees = new Map();

    // initial all indegrees
    // initial all coursMap
    for (let i = 0; i < numCourses; i++) {
        indegrees.set(i, 0);
        courseMap.set(i, []);
    }
    //  set up indegrees and courseMap based on prerequisites
    prerequisites.forEach((coursePair) => {
        let course = coursePair[0];
        let preCourse = coursePair[1];
        indegrees.set(course, indegrees.get(course) + 1);
        courseMap.get(preCourse).push(course);
    });
    // get all precourses,whose indegrees = 0
    let preCourses = [];
    indegrees.forEach((indegree, course) => {
        if (indegree === 0) {
            preCourses.push(course);
        }
    })
    // BFS
    let courseOrder = [];
    let queue = preCourses;

    while (queue.length !== 0) {
        let course = queue.shift();
        courseOrder.push(course);

        let nextCourses = courseMap.get(course);
        nextCourses.forEach((nextCourse) => {
            indegrees.set(nextCourse, indegrees.get(nextCourse) - 1);
            if (indegrees.get(nextCourse) === 0) {
                queue.push(nextCourse);
            }
        });
    }

    if (numCourses !== courseOrder.length) {
        return [];
    }
    return courseOrder;

};



// const main = () => {
//     let numCourses = 4;
//     let prerequisites = [[1,0],[2,0],[3,1],[3,2]];
//     console.log(findOrder(numCourses, prerequisites));
// };
// main();
