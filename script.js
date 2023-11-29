document.addEventListener('DOMContentLoaded', function() {
    // Combined Email Templates
    const emailTemplates = [
        {
            subject: "Holiday Savings from Santa 🎅",
            sender: "santa@County.com",
            body: "<b style='font-size:34px;color:red;'>HOLIDAY SAVINGS FOR  COUNTY</b><br><span style='font-size:24px;'>To show our appreciation this holiday season we are awarding employees of  County a $500 gift card for holiday shopping!<br><br>Employees will receive a gift card redeemable at a store of your choice as a thank you for your hard work. Simply click on the link, select the store of choice, and print the gift card. <br><br><a href='christmas.html' id='special-message-link'>Click here to redeem gift card</a><br><br>Again, we appreciate all that  County does for our community.<br>Have a happy and safe holiday season!<br><br>Thank you.</span> "
        },
        {
            subject: "HELP! The Elves need you 📜🎅",
            sender: "elves@workshop.com",
            body: "<b style='font-size:34px;color:navy'>APPROVE YOUR PURCHASE</b><br><br><span style='font-size:24px;'><span style='background-color:navy;padding:10px;color:white'>Dear {CARD MEMBER}, Please review the message below.</span><br><br>A charge of $249.99 USD was made at the Elf Workshop. The elves are unable to continue working on your items until you approve this transaction. <br><br>Did you make this purchase?<br><br><a href='christmas.html' id='special-message-link'>Click here to decline</a><br><br><span style='font-size:18px;'>Click the link to help protect your account.<br><b>If you do not click the link, the transaction will automatically go through and you will be charged the full amount.</b></span><br><br>Responding to this alert does not change the status of the charge.</span>"
        },
        {
            subject: "Delivery Notification 🦌🛷",
            sender: "reindeer@flyingteam.com",
            body: "<b style='font-size:34px;color:#65009A;'>Delivery Notification</b><br><br><span style='font-size:24px;'><b>Order Numb:</b> #12252023 <br><b>Order date</b>: December 25, 2023<br>Dear customer, <br><br>Your package has arrived at the post office on December 25, 2023. Our reindeer was unable to deliver the package to you.<br><br>To receive your package, please go to the nearest office and show this receipt.<br><br><a href='christmas.html' id='special-message-link' style='background-color:#65009A;'>Get & Print Receipt</a><br><br>Thank you.</span>"
        },
        // Add more templates as needed
    ];

    function generateEmail() {
        // Select a random email template
        const randomTemplate = emailTemplates[Math.floor(Math.random() * emailTemplates.length)];

        // Set the email components
        document.getElementById('email-subject').textContent = randomTemplate.subject;
        document.getElementById('email-sender').textContent = `From: ${randomTemplate.sender}`;
        document.getElementById('emailBody').innerHTML = randomTemplate.body;
    }

    // Call generateEmail to populate the email content
    generateEmail();


    // Trigger the 'Scene' event immediately
    callIFTTTWebhook('Scene');

  // Event listener for the special message link
  document.getElementById('special-message-link').addEventListener('click', function(event) {


    // Trigger the 'Phishing' event
    callIFTTTWebhook('Phishing');

    // After 5 seconds, revert back to the 'Scene' event
    setTimeout(() => callIFTTTWebhook('Scene'), 7000);
});
});

function callIFTTTWebhook(iftttEventName) {
    var iftttKey = 'ifttt key'; // Replace with your actual IFTTT key
    var iftttUrl = `https://maker.ifttt.com/trigger/${iftttEventName}/json/with/key/${iftttKey}`;
    fetch(iftttUrl, { method: 'POST' })
        .then(response => console.log(`IFTTT Triggered for event: ${iftttEventName}`, response))
        .catch(error => console.error('Error triggering IFTTT', error));
}
