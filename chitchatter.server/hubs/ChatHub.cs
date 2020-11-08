using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using chitchatter.server.models;

namespace chitchatter.server.hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(ChatMessage message)
        {
            Console.WriteLine("SendMessage");
        }
    }
}