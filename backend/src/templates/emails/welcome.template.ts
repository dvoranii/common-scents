interface WelcomeEmailData {
  frontendUrl: string;
}

export function getWelcomeEmailHTML(data: WelcomeEmailData): string {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0;
              padding: 0;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 30px 20px; 
              text-align: center; 
              border-radius: 10px 10px 0 0; 
            }
            .content { 
              background: #f9f9f9; 
              padding: 30px; 
              border-radius: 0 0 10px 10px; 
            }
            .button { 
              display: inline-block; 
              background: #667eea; 
              color: white; 
              padding: 12px 30px; 
              text-decoration: none; 
              border-radius: 5px; 
              margin-top: 20px; 
            }
            .footer { 
              text-align: center; 
              margin-top: 20px; 
              color: #666; 
              font-size: 12px; 
            }
            .footer a {
              color: #667eea;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Welcome</h1>
            </div>
            <div class="content">
              <h2>Thanks for joining our newsletter</h2>
              <p>We're excited to have you as part of our community.</p>
              <p>You'll receive weekly updates with:</p>
              <ul>
                <li>Exclusive fragrance reviews</li>
                <li>Expert tips and recommendations</li>
                <li>Special offers and early access</li>
              </ul>
              <p>Stay tuned for amazing content.</p>
              <a href="${data.frontendUrl}" class="button">Visit Our Site</a>
            </div>
            <div class="footer">
              <p>
                <a href="{{ unsubscribe }}">Unsubscribe</a> | 
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;
}

export function getWelcomeEmailText(data: WelcomeEmailData): string {
  return `
  Welcome!
  
  Thanks for joining our newsletter!
  
  We're excited to have you as part of our community.
  
  You'll receive weekly updates with:
  - Exclusive fragrance reviews
  - Expert tips and recommendations
  - Special offers and early access
  
  Stay tuned for amazing content.
  
  Visit our site: ${data.frontendUrl}
  
  You can unsubscribe at any time by clicking the link at the bottom of our emails.
    `.trim();
}
