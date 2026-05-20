using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.Models;

namespace CourseApi.DTOs
{
    public class CourseResponseDto
    {
        public int Id { get; set; }
        public string? Title { get; set; } = "";
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
        public float Price { get; set; }
        public int MaxCapacity { get; set; }
        public int AttendantsCount { get; set; }
        public string?  CategoryName { get; set; } = "";
    }
}