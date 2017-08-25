using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcAngularJSQuiz.Models
{
    public class Test
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        [Required]
        public Category Category { get; set; }

        [Required]
        public string Level { get; set; }
    }
}