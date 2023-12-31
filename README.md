
# PhishingTree
This project simulates an email environment, showcasing the generation of random emails and the use of basic webhook interactions. A key feature is the ability to change the color of LED lights with a button click. Set against a festive backdrop, the project incorporates a scenario involving Kasa Smart LED Lights and integrates IFTTT for interactive functionalities.

**Key Features**
1. Dynamic Email Content: Each page refresh randomly changes the email's sender, subject, and body from a preset list, offering a unique experience every time.
2. Interactive Elements: A clickable link in the email leads to a merry-christmas.html page, where users encounter a festive greeting and a simulated button to change the LED strip's color, enhancing engagement.
   
The Phishing Tree with the lights will change to red when a button on a website is clicked.

[TikTok video of the lights](https://www.tiktok.com/t/ZT8Pdtcgc/)\
[Tweet explaining the project](https://x.com/_sysengineer/status/1729919494229721144?s=46&t=grcgBMvw5EVBx5CiAuSwZg)\
[Mastodon post with more detail](https://infosec.exchange/@Sysengineer/111495441015104865)

# Products
[Kasa Smart LED Light Strip](https://a.co/d/0Jql6Av)\
[IFTTT](https://ifttt.com/)

# Kasa Mobile App
1. Setup and connect your lights to wifi
2. Go to the Smart icon at the bottom
3. Select the Scenes
4. Create a new scene
5. Click **Add Action**
6. Click **Control Smart Devices**
7. Select your lights
8. Click **Set Lighting**
9. Pick a scene or color you want the lights to stay on

# IFTTT
1. Click create
2. In the first part, where it says **If This**, Click Add
3. Search for **Webhooks** and select
4. Select **Receive a web request with a JSON payload**
5. Name the event. I named mine Phishing (which turned the lights red) - Whatever you name it will be the event name you refer to in the code. 
6. Go to **Then** and click **Add**
7. Search for **Kasa** and select the box that says **TP-Link Kasa**
8. From here you will have a bunch of options, Select **Change Color**
9. It will ask you to delect the Device, color, brightness, transition duration. Set that to your liking.
10. Click **Create Action**
11. Repeat steps 1-4
12. Name the event **Scene**
13. Go to **Then** and click **Add**
14. Search for **Kasa** and select the box that says **TP-Link Kasa**
15. Select **Activate scene**
16. Select the Scene you created (this will make sure the lights go back to the default color after red)

    **** To get your key, go to (https://ifttt.com/maker_webhooks) and click on Documentation


# My links
[My Social Media](https://beacons.ai/sysengineer)\
[Contribute to My Project](https://www.buymeacoffee.com/sysengineer)
