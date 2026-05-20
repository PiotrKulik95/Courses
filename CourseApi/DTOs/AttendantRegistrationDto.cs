using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CourseApi.DTOs
{
    public class AttendantRegistrationDto
    {
        [Required(ErrorMessage = "Podaj imię")]
        [RegularExpression(@"^[a-zA-ZĄĆĘŁŃÓŚŹŻąęćłńóśźż]+$", ErrorMessage = "Imię może zawierać wyłącznie litery (bez cyfr i znaków specjalnych)")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Podaj nazwisko")]
        [RegularExpression(@"^[a-zA-ZĄĆĘŁŃÓŚŹŻąęćłńóśźż]+(?:[-][a-zA-ZĄĆĘŁŃÓŚŹŻąęćłńóśźż]+)*$", ErrorMessage = "Nazwisko może zawierać wyłącznie litery (bez cyfr i znaków specjalnych)")]

        public string? Surname { get; set; }

        [Required(ErrorMessage = "Numer telefonu jest wymagany")]
        [RegularExpression(@"^[0-9]{9}$", ErrorMessage = "Podaj poprawny numer telefonu")]
        public string? Phone { get; set; }

        [Required(ErrorMessage = "Email jest wymagany")]
        [RegularExpression(@"^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$", ErrorMessage = "Podaj poprawny email")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Nieokreślono kursu")]
        public int CourseId { get; set; }
    }
}