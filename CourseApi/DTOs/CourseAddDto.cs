using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using CourseApi.Models;

namespace CourseApi.DTOs
{
    public class CourseAddDto
    {
        [Required(ErrorMessage = "Podaj tytuł kursu")]
        public string? Title { get; set; }
        [Required(ErrorMessage = "Data rozpoczęcia jest wymagana")]
        public DateOnly? StartDate { get; set; }
        [Required(ErrorMessage = "Data zakończenia jest wymagana")]
        public DateOnly? EndDate { get; set; }
        [Required(ErrorMessage = "Cena jest wymagana")]
        public float? Price { get; set; }
        [Required(ErrorMessage = "Maxymalna liczba uczestników jest wymagana")]
        public int? MaxCapacity { get; set; }
        [Required(ErrorMessage = "Kategoria jest wymagana")]
        public int? CategoryId { get; set; }
    }
}