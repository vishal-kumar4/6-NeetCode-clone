const courseModel=require('../models/courseModel')

module.exports.getAllCourses=async ()=>{
        return await courseModel.find({});
    }
    

    //to create a test data if database is empty then it'll dump it 
    module.exports.createFirstCourse=async ()=>{
        const courses= await courseModel.find({});
        if(courses && courses.length==0)
        {
            const firstcourse={
                "title":"bz DSA",
                "level":"Easy"
            };
            const course=new courseModel(firstcourse);
            await course.save()
        }
}