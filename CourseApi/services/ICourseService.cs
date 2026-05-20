using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.DTOs;
using CourseApi.Models;

namespace CourseApi.services
{
    public interface ICourseService
    {
        Task<IEnumerable<CourseResponseDto>> GetCourses();
        Task<CourseResponseDto?> GetCourse(int id);
    }
}