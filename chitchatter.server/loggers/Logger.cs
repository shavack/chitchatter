using chitchatter.server.interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chitchatter.server.loggers
{
    public class Logger : ILogger
    {
        public void Log(string text)
        {
            Console.WriteLine($"From logger: {text}");
        }
    }
}
