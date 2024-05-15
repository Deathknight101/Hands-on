# Hands On
Live Link: https://handson-b4965.web.app

### Main Features from the Main Requirements

1. **User Authentication**
   - Email and password-based login and registration.
   - Social login (Google/GitHub).
   - Password validation (uppercase, lowercase, minimum 6 characters).
   - Display error and success messages via toast/sweet alert.
   - JWT authentication for protected routes.

2. **Navigation**
   - Navbar with website name/logo, Home, Need Volunteer Page, and My Profile dropdown.
   - Conditional "Login" and "Logout" buttons.
   - User photo and display name on hover if logged in.
   - My Profile dropdown with "Add Volunteer Post" and "Manage My Post".

3. **Home Page**
   - Eye-catching banner/slider with a minimum of 3 slides.
   - "Volunteer Needs Now" section showcasing up to 6 posts.
   - "See All" button linking to the Need Volunteer Page.
   - Two additional meaningful sections.

4. **Volunteer Post Management**
   - Add Volunteer Post: Form to add a new post with thumbnail, title, description, category, location, number of volunteers needed, deadline, and organizer details.
   - Manage My Post: View, update, and delete user's posts. Confirmation prompts for delete actions.

5. **Volunteer Interaction**
   - Volunteer Need Post Details: View full details of a post with a "Be a Volunteer" button.
   - "Be a Volunteer" Form: Submit request with read-only post details and editable suggestion field. Decrease number of volunteers needed upon submission.

6. **Need Volunteer Page**
   - Display all volunteer need posts in a card format.
   - Search functionality based on Post Title.
   - Toggle layout between card and table view.

7. **Dynamic and Responsive Design**
   - Responsive design for mobile, tablet, and desktop views.
   - Dynamic page titles based on the current route.

8. **Error Handling and Feedback**
   - Custom error messages (no Lorem Ipsum or default alerts).
   - Relevant toast/notification/sweet alert for all CRUD operations.

9. **Additional Pages**
   - 404 Not Found page.
   - Reasonable and meaningful footer with website name, copyright, contact information, and social media links.

10. **Environmental Variables**
    - Hide Firebase config keys and MongoDB credentials using environment variables.

11. **Extra Features**
    - Dark/Light theme toggle.
    - Optional additional features like Tailwind CSS library usage, loading spinners, animations, custom features, and pagination.