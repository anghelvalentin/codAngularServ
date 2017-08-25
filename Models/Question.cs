using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MvcAngularJSQuiz.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        public string Query { get; set; }

        [Required]
        public string AnswerA { get; set; }
        [Required]
        public string AnswerB { get; set; }
        public string AnswerC { get; set; }
        public string AnswerD { get; set; }

        [Required]
        public string RightAnswer { get; set; }

        public string Explanation { get; set; }

        [Required]
        public Test Test { get; set; }

        //[Required]
        //public int Score { get; set; }
    }
}