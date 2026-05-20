using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CourseApi.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public DateOnly StartDate { get; set; }
        public DateOnly EndDate { get; set; }
        public float Price { get; set; }
        public int MaxCapacity { get; set; }
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public List<Attendant>? Attendants { get; set; }
    }
}