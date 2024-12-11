# MountainTrails

The Mountain Trails application is a web-based platform that allows users to explore, post, and manage mountain trail listings. Users can view trail details, add new trails, and edit or delete their own trails. Authentication ensures that only authorized users can perform certain actions.

* Catalog of trails.

* Add new trails.

* Edit and delete trails owned by the user.

* User Profile: View and edit user profile.

* Frontend: Angular (Standalone Components)

* Backend: Node.js with Express.js

* Database: MongoDB

* POST /api/register: Register a new user.

* POST /api/login: Login a user.

* POST /api/logout: Logout a user.

* User Management

* GET /api/profile: Get user profile.

* PUT /api/profile/edit/:userId: Edit user profile.

Trail Management:

* GET /api/trails: Get all trails.

* POST /api/trails: Add a new trail.

* GET /api/trails/:trailId: Get details of a specific trail.

* PUT /api/trails/edit/:trailId: Edit a trail.

* DELETE /api/trails/:trailId: Delete a trail.

