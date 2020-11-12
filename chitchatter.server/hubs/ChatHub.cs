using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using chitchatter.server.models;
using chitchatter.server.interfaces;

namespace chitchatter.server.hubs
{
    public class ChatHub : Hub
    {
        static Dictionary<string, string> connections = new Dictionary<string, string>();
        private ILogger _logger;

        public ChatHub(ILogger logger){
            this._logger = logger;
        }
        public override Task OnDisconnectedAsync(Exception exception)
        {
            this._logger.Log("OnDisconnectedAsync");

            var connection = connections.FirstOrDefault(x => x.Key == Context.ConnectionId);

            if (connection.Key != null)
            {
                connections.Remove(connection.Key);
            }           
            
            foreach (var kvp in connections)
            {
                Console.WriteLine("Connection = {0}, User = {1}", kvp.Key, kvp.Value);
            }
            var task = Clients.All.SendAsync("ChangeUserStatus", connections);
            task.Wait();

            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(ChatMessage message)
        {
            Console.WriteLine($"SendMessage | {message.Sender}: {message.Message}");
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
        public async Task RegisterUser(string user)
        {
            Console.WriteLine($"RegisterUser | {user}");
            connections.Add(Context.ConnectionId, user);

            await Clients.All.SendAsync("ReceiveMessage", new ChatMessage() { Sender = "Server", Message = $"{ user } has joined the chat." });
            await Clients.All.SendAsync("ChangeUserStatus", connections);
        }
        
    }
}