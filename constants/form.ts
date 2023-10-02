export const QUESTION_TYPES = [
    {
        id: 'paragraph',
        label: 'Paragraph',
        value: 1, // You can assign a unique numeric value to each question type
        // You can add more properties specific to the 'paragraph' question type here
    },
    {
        id: 'short',
        label: 'Short Answer',
        value: 2,
        // Add more properties for 'short answer' questions
    },
    {
        id: 'multipleChoice',
        label: 'Multiple Choice',
        value: 3,
        // Add more properties for 'multiple choice' questions
    },
    {
        id: 'yesNo',
        label: 'Yes or No',
        value: 4,
        // Add more properties for 'yes or no' questions
    },
    {
        id: 'dropdown',
        label: 'Dropdown',
        value: 5,
        // Add more properties for 'dropdown' questions
    },
    {
        id: 'date',
        label: 'Date',
        value: 6,
        // Add more properties for 'date' questions
    },
    {
        id: 'number',
        label: 'Number',
        value: 7,
        // Add more properties for 'number' questions
    },
    {
        id: 'fileUpload',
        label: 'File Upload',
        value: 8,
        // Add more properties for 'file upload' questions
    },
    {
        id: 'video',
        label: 'Video Based',
        value: 9,
        // Add more properties for 'video based' questions
    },
    // Add more question types as needed
];

export const QUESTION_TYPES_REV:any = {
    PARAGRAPH: 1,
    SHORT: 2,
    MULTIPLE_CHOICE: 3,
    YES_NO: 4,
    DROPDOWN: 5,
    DATE: 6,
    NUMBER: 7,
    FILE_UPLOAD: 8,
    VIDEO: 9
    // Add more question types as needed
}
export const QUESTION_LABELS_TYPE: any = {
    'paragraph': 'PARAGRAPH',
    'short': 'SHORT',
    'multipleChoice': 'MULTIPLE_CHOICE',
    'yesNo': 'YES_NO',
    'dropdown': 'DROPDOWN',
    'date': 'DATE',
    'number': 'NUMBER',
    'fileUpload': 'FILE_UPLOAD',
    'video': 'VIDEO'
    // Add more question types as needed
}
export const FORM_PERSONAL_INFO = [
    {
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        id: 'firstname',
        options: false,
        value: ''
    },
    {
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        id: 'lastname',
        options: false,
        value: ''
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        id: 'email',
        options: false,
        value: ''
    },
    {
        name: 'phone',
        type: 'text',
        label: 'Phone',
        id: 'phone',
        options: true,
        value: ''
    },
    {
        name: 'nationality',
        type: 'text',
        label: 'Nationality',
        id: 'nationality',
        options: true,
        value: ''
    },
    {
        name: 'residence',
        type: 'text',
        label: 'Current Residence',
        id: 'residence',
        options: true,
        value: ''
    },
    {
        name: 'idNumber',
        type: 'text',
        label: 'ID Number',
        id: 'idNumber',
        options: true,
        value: ''
    },
    {
        name: 'gender',
        type: 'text',
        label: 'Gender',
        id: 'gender',
        options: true,
        value: ''
    }
];

export const FORM_PROFILE = [
    {
        name: 'Education',
        type: 'text',
        label: 'Education',
        id: 'education',
        options: true,
        value: ''
    },
    {
        name: 'Experience',
        type: 'text',
        label: 'Experience',
        id: 'experience',
        options: true,
        value: ''
    },
    {
        name: 'Resume',
        type: 'text',
        label: 'Resume',
        id: 'resume',
        options: true,
        value: ''
    },
]