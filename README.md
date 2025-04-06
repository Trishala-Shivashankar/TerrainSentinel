TerrainSentinel - Landslide Detection & Early Warning System

TerrainSentinel is a smart, drone-based system designed to detect landslide risks and provide early warnings using aerial survey data, AI/ML analytics, and real-time environmental inputs. 

What This Project Does
Displays simulated landslide risk zones on a map (India).

Shows real-time alerts based on mock data.

Allows users to simulate safe paths through affected zones.

Visualizes past landslide events from a CSV data file.

Project Structure
File	Purpose
index.html	Main page showing live landslide risk simulation
past_data.html	Table-based view of historical landslide data
products.html	Information about the drone system, technologies used, and system flow
style.css	Styling for all pages (modern, minimal UI)
script.js	Contains simulation logic, risk updates, and path finder
landslide_simulation_data.csv	Mock CSV with past landslide events

Technologies Used
Frontend: HTML, CSS, JavaScript, Python

Visualization: Simulated alerts, path simulator, interactive tables

Backend Logic : Python, AI/ML risk classification, IMD API integration

Tools: Plotly, Folium, Matplotlib (for prototype data processing)

System Workflow (Planned Hardware)
Drone flies over terrain collecting LiDAR, camera, and weather data

Data is preprocessed and sent to analysis modules

AI/ML models identify high-risk zones

Alerts and maps are generated and served via this platform

Credits
Developed by Team Critical Visual Tech

