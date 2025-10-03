from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(color_scheme="dark")
        page = context.new_page()

        # Navigate to the local development server
        page.goto("http://localhost:3000")

        # Wait for the page to be fully loaded
        page.wait_for_load_state("networkidle")

        # Click the button to open the contact form modal
        button = page.get_by_role("button", name="Leave a Message....")
        expect(button).to_be_visible()
        button.click()

        # Wait for the modal to be visible
        modal = page.locator("._modal-content")
        expect(modal).to_be_visible()

        # Add a small delay for rendering to settle
        page.wait_for_timeout(1000)

        # Take a screenshot of the modal
        modal.screenshot(path="jules-scratch/verification/contact_form_dark.png")

        print("Verification successful, screenshot taken.")

        browser.close()

if __name__ == "__main__":
    run_verification()