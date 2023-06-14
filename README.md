# SpeedyAssignment

This project contains the source code for a web application built with React and Tailwind CSS. It includes components and styles for a header section, loader, and custom CSS styles.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: [`git clone https://github.com/03brainy-clicks/speedyAssignment.git`]
2. Navigate to the project directory: `cd project-directory`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open the application in your browser: `http://localhost:3000`

## Project Structure

The project structure is organized as follows:

- `/src`: Contains the source code files
  - `/components`: Contains React components used in the application
    - `Header.js`: Implements the header section with navigation and filters
    - `Loader.js`: Renders a loader component during data loading
    - ...
  - `/context`: Contains the application context files
    - `Context.js`: Defines the application context using React's Context API
    - ...
  - `/utils`: Contains utility files
    - `Modal.js`: Implements a reusable modal component
    - ...
  - `/styles`: Contains the custom CSS styles
    - `tailwind.css`: Includes the Tailwind CSS base, components, and utilities
    - `custom.css`: Includes additional custom styles specific to the project
    - ...
  - `/form`: Contains form-related components
    - `AddTopicForm.js`: Implements a form for adding new topics
    - ...
- `/public`: Contains public assets and HTML files
  - `index.html`: The main HTML file for the application

## Usage

The code provides the following functionality and features:

- Header component: Displays a navigation bar with topic and category filters. Allows adding new topics via a modal.
- Loader component: Shows a spinning loader icon during data loading.
- Custom CSS styles: Includes custom styles for scrollbars, Quill editor, buttons, headings, and more.

Feel free to explore the code and modify it to suit your project's requirements.

## Dependencies

The project uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework.
- @fortawesome/react-fontawesome: Provides React components for Font Awesome icons.

Please refer to the `package.json` file for the specific versions of each dependency used in the project.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
