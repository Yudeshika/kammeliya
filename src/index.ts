import html2canvas from 'html2canvas';
import './kammeliya.css'; // Import the custom CSS file

class Kammeliya {
  init() {
    // Create a floating button with a camera icon
    const button = document.createElement('button');
    
    // Add Font Awesome camera icon
    button.innerText = '📸';
    button.className = 'kammeliya-button'; // Apply custom button styles
    
    button.addEventListener('click', async () => {
      const bodyElement = document.body; // Capture the entire body element
      const screenshotDataUrl = await this.takeScreenshot(bodyElement);
      console.log('Screenshot captured:', screenshotDataUrl);
      this.showPopup(screenshotDataUrl); // Show the popup with the captured image
    });

    document.body.appendChild(button);
  }

  async takeScreenshot(element: HTMLElement): Promise<string> {
    try {
      const canvas = await html2canvas(element);
      return canvas.toDataURL('image/png');
    } catch (error) {
      throw new Error('Screenshot failed: ' + error);
    }
  }

  showPopup(imageDataUrl: string) {
    // Create popup container
    const popup = document.createElement('div');
    popup.className = 'kammeliya-popup'; // Apply custom popup styles

    // Create image element
    const image = document.createElement('img');
    image.src = imageDataUrl;
    popup.appendChild(image);

    // Create Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.className = 'kammeliya-popup-button cancel'; // Apply custom button styles
    cancelButton.addEventListener('click', () => {
      document.body.removeChild(popup); // Remove popup
    });
    popup.appendChild(cancelButton);

    // Create Accept button
    const acceptButton = document.createElement('button');
    acceptButton.innerText = 'Accept';
    acceptButton.className = 'kammeliya-popup-button accept'; // Apply custom button styles
    acceptButton.addEventListener('click', () => {
      // Handle the acceptance logic, e.g., save the image
      console.log('Image accepted:', imageDataUrl);
      document.body.removeChild(popup); // Remove popup
    });
    popup.appendChild(acceptButton);

    // Append popup to the body
    document.body.appendChild(popup);
  }
}

export default Kammeliya;
