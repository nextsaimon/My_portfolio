from playwright.sync_api import sync_playwright, expect

def verify_tech_stack():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the page
        try:
            page.goto("http://localhost:3000", timeout=60000)
            print("Navigated to homepage")
        except Exception as e:
            print(f"Failed to navigate: {e}")
            browser.close()
            return

        # Wait for the Experience section to be visible
        # The ID is "experience"
        experience_section = page.locator("#experience")
        expect(experience_section).to_be_visible(timeout=30000)

        # Scroll to the experience section
        experience_section.scroll_into_view_if_needed()

        # Check for "Tech Stack" title
        tech_stack_title = page.get_by_role("heading", name="Tech Stack")
        expect(tech_stack_title).to_be_visible()
        print("Tech Stack title found")

        # Check for some of the new skills
        skills_to_check = ["MongoDB", "BetterAuth", "Appwrite", "Firebase", "Cloudflare", "Vercel", "NodeJS"]
        for skill in skills_to_check:
             expect(page.get_by_text(skill, exact=True)).to_be_visible()
             print(f"Found skill: {skill}")

        # Take a screenshot of the Experience section (or the whole page)
        # We focus on the Tech Stack part
        page.screenshot(path="verification_tech_stack.png", full_page=True)
        print("Screenshot taken")

        browser.close()

if __name__ == "__main__":
    verify_tech_stack()
