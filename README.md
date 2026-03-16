NEURA — Voice AI Assistant (LiveKit + Google Realtime + Mem0 + MCP)
NEURA is a real-time voice assistant built with LiveKit Agents and Google Realtime models.
It supports:

🎙️ Real-time voice interaction
🧠 Memory persistence using Mem0
🌐 Built-in tools for web search and weather
🔌 Dynamic MCP tool integration via SSE (e.g., n8n MCP server)
🧾 Custom persona and session behavior via prompt instructions
Features
Live voice agent powered by livekit-agents
Google Realtime model integration (livekit-plugins-google)
Persistent user memory with mem0
Function tools:
get_weather (via wttr.in)
search_web (DuckDuckGo)
Extensible MCP integration:
Connects to SSE MCP servers
Discovers and registers tools dynamically
Container-ready with a Dockerfile
Project Structure
agent.py — Main agent entrypoint and runtime flow
prompts.py — Agent persona + session instructions
tools.py — Local function tools (weather/search)
mcp_client — MCP server/client integration layer
test_mem0.py — Basic Mem0 memory test script
requirements.txt — Python dependencies
.env.example — Required environment variables template
livekit.toml — LiveKit project/agent config
Dockerfile — Container setup for deployment
Requirements
Python 3.11+ recommended
(Docker image currently uses Python 3.13)
A LiveKit project
Google API key (for realtime model)
Mem0 API key
Optional: n8n MCP Server URL for dynamic external tools
Environment Setup
Copy .env.example to .env
Fill in your values for:
LIVEKIT_URL
LIVEKIT_API_KEY
LIVEKIT_API_SECRET
GOOGLE_API_KEY
MEM0_API_KEY
N8N_MCP_SERVER_URL (optional, for MCP tools)
Installation
Create and activate virtual environment
Windows (PowerShell): py -3.11 -m venv .venv then .venv\Scripts\Activate.ps1
Install dependencies: pip install -r requirements.txt
Run (Development)
Use: py -3.11 agent.py dev

This starts the LiveKit worker in development mode.

Run (Production-style Worker)
Use: python agent.py start

Docker
Build image: docker build -t neura-agent .
Run container: docker run --env-file .env neura-agent

How It Works (High Level)
Loads environment variables from .env
Creates assistant with:
Google realtime LLM
Local tools (get_weather, search_web)
Loads past memories from Mem0 and injects relevant context
Connects to MCP SSE server (if configured) and registers discovered tools
Starts LiveKit AgentSession
On shutdown, saves user/assistant conversation back to memory
Notes
livekit-plugins-openai is present in dependencies but not currently used in agent.py.
The assistant persona and behavior are heavily controlled by AGENT_INSTRUCTION and SESSION_INSTRUCTION.
If MCP URL is missing or unavailable, dynamic MCP tools may fail to load.
Troubleshooting
Agent fails to connect to LiveKit
Check LIVEKIT_URL, LIVEKIT_API_KEY, LIVEKIT_API_SECRET
Google model errors
Verify GOOGLE_API_KEY
Memory not loading/saving
Verify MEM0_API_KEY and Mem0 account setup
MCP tools not available
Check N8N_MCP_SERVER_URL and ensure the SSE endpoint is reachable
License
Add your preferred license (e.g., MIT) in a LICENSE file.

Author
Built by the NEURA team.

If you want, I can also generate:

a shorter one-page README (more startup style), or
a polished GitHub README with badges, architecture diagram, and screenshots section.
Todo checklist (completed)
 Reviewed project files and dependencies
 Identified runtime flow and tool integrations
 Mapped required environment variables from .env.example
 Drafted a complete README tailored to this codebase
 Provided ready-to-paste content (no file edits performed in read-only mode)
