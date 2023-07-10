# My work day schedule

# Project URL


# Project Repository
https://github.com/xotaina/My-Work-Day-Scheduler

# Project description
My work day scheduler that allows users to save, edit, and manage tasks for different hours of the day using local storage and dynamically updating the user interface based on the current time.
    Saving and Managing Tasks:
        The scheduler provides a set of time-blocks, typically representing different hours of the workday. Each time-block contains a textarea for the user to input their task description and a save button to store the task.
        When the user clicks the save button for a specific time-block, an event listener is triggered. The event listener retrieves the unique id of the parent time-block and the user's input description from the corresponding textarea.
        The retrieved information, i.e., the time-block id and description, is then stored in the browser's local storage. The time-block id is used as the key, allowing easy retrieval and updating of tasks for specific time-blocks.
        The saved tasks are stored as key-value pairs in the local storage, with the time-block id as the key and the task description as the value.

    Editing Tasks:
        The scheduler allows users to edit their tasks by clicking on a task item. When a task item is clicked, an event listener is triggered.
        The event listener replaces the task item with a textarea, pre-filled with the existing task description.
        Users can then modify the task description within the textarea.
        When the user clicks outside the textarea or switches focus, another event listener is triggered. This event listener retrieves the updated task description from the textarea and replaces the textarea with a new task item containing the updated description.
        The updated task is then saved in the local storage, replacing the previous description associated with the respective time-block id.

    Dynamically Updating User Interface:
        The scheduler dynamically updates the user interface to provide visual cues for past, present, and future time-blocks.
        The current hour is obtained using the Moment.js library, which retrieves the current time from the user's system clock.
        Each time-block is iterated using a loop. For each time-block, the hour is extracted from its id by splitting the id string and parsing the hour value as an integer.
        Based on the comparison between the current hour and the time-block hour, the appropriate CSS class ("past", "present", or "future") is added to the time-block element. This class defines the visual styling for the respective time-block.
        The dynamically added CSS classes update the appearance of the time-blocks in real-time, providing visual feedback to the user based on the current time.

Overall, the work day scheduler combines the use of local storage for storing and retrieving task data with dynamic updates to the user interface based on the current time. This allows users to conveniently save, edit, and manage their tasks throughout the work day, with visual indicators of the task status based on the current time.