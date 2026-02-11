from dotenv import load_dotenv
from mem0 import MemoryClient
import logging
import json


load_dotenv()
user_name = 'Vikas'
mem0 = MemoryClient()

def add_memory():
    messages_formatted = [
        {
            "role": "user",
            "content": "My best friend's name is Athithyan."
        },
        {
            "role": "assistant",
            "content": "Oh great! That's a wonderful name."
        },
        {
            "role": "user",
            "content": "I think so too."
        },
        {
            "role": "assistant",
            "content": "What is your favorite song by them?"
        },
        {
            "role": "user",
            "content": "Nee Singam Dhan."
        },
        {
            "role": "assistant",
            "content": "That's a powerful song choice! Do you also have a favorite color?"
        },
        {
            "role": "user",
            "content": "Red."
        },
        {
            "role": "assistant",
            "content": "Good choice! It suits your energy."
        },
        {
            "role": "user",
            "content": "By the way, my native is Gudalur, Ooty."
        },
        {
            "role": "assistant",
            "content": "Nice! Ooty is such a beautiful hill station to be from."
        },
        {
            "role": "user",
            "content": "I'm currently studying 2nd year AI & Data Science at Sri Eshwar College of Engineering in Coimbatore."
        },
        {
            "role": "assistant",
            "content": "That's great, Karthika! Sri Eshwar is known for its strong AI and tech focus."
        },
        {
            "role": "user",
            "content": "I also have two siblings."
        },
        {
            "role": "assistant",
            "content": "Oh lovely! Family makes life more colorful, doesn’t it?"
        }
    ]


    mem0.add(messages_formatted, user_id="Vikas")

def get_memory_by_query():
    mem0 = MemoryClient()
    query = "What are {user_name}'s preferences?"
    results = mem0.search(query, user_id=user_name)

    memories = [
            {
                "memory": result["memory"],
                "updated_at": result["updated_at"]
            }
            for result in results
        ]
    memories_str = json.dumps(memories)
    print(f"Memories: {memories_str}")
    return memories_str


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    get_memory_by_query()
    #add_memory()
  
