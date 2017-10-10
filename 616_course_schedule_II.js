'use strict';
const findOrder = (numCourses, prerequisites) => {
    courseMap = new Map();
    indegree = new Map();

    // initial all indegree
    for (let i = 0; i < numCourses; i++) {
        indegree.set(i, 0);
    }
    // initial all coursMap
    for (let i = 0; i < numCourses; i++) {
        courseMap.set(i, []);
    }
    //  set up indegree and courseMap based on prerequisites
    prerequisites.forEach((coursePair) => {
        let course = coursePair[0];
        let precourse = coursePair[1];
        indegree.set(course, indegree.get(course) + 1);
        courseMap.get(precourse).push(course);
    });
    // get all precourses,whose indegree = 0
    let preCourses = [];
    for (let i = 0; i < indegree.size; i++) {
        if (indegree.get(i) === 0) {
            preCourses.push(i);
        }
    }
    // BFS
    let courseOrder = [];
    let queue = preCourses;

    while (queue.length !== 0) {
        let course = queue.shift();
        courseOrder.push(course);

        let nextCourses = courseMap.get(course);
        for (let i = 0; i < nextCourses.length; i++) {
            let nextCourse = nextCourses[i];
            indegree.set(nextCourse, indegree.get(nextCourse) - 1);
            if (indegree.get(nextCourse) === 0) {
                queue.push(nextCourse);
            }
        }

    }

    if (numCourses !== courseOrder.length) {
        return [];
    }
    return courseOrder;

};


//
// const main = () => {
//     let numCourses = 4;
//     let prerequisites = [[1,0],[2,0],[3,1],[3,2]];
//     console.log(findOrder(numCourses, prerequisites));
// };
// main();
