const personalDetails = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          label: "First Name",
          scope: "#/properties/firstName",
        },
        {
          type: "Control",
          label: "Last Name",
          scope: "#/properties/lastName",
        },
      ],
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          label: "Address #1",
          scope: "#/properties/address1",
        },
        {
          type: "Control",
          label: "Address #2",
          scope: "#/properties/address2",
        },
        {
          type: "Control",
          label: "Address #3",
          scope: "#/properties/address3",
        },
        {
          type: "Control",
          label: "Address #4",
          scope: "#/properties/address4",
        },
        {
          type: "Control",
          label: "City",
          scope: "#/properties/city",
        },
        {
          type: "Control",
          label: "Pincode",
          scope: "#/properties/pincode",
        },
      ],
    },
  ],
}

const otherDetails = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Group",
      label: "Optional information",
      elements: [
        {
          type: "Control",
          label: "Recieve latest updates through mail",
          scope: "#/properties/latestUpdates",
          options: {
            toggle: true,
          },
        },
        {
          type: "Control",
          label: "Email Id",
          scope: "#/properties/emailId",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/latestUpdates",
              schema: {
                const: false,
              },
            },
          },
        },
        {
          type: "Control",
          label: "Number of mails per week",
          scope: "#/properties/noOfMails",
          options: {
            slider: true,
          },
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/latestUpdates",
              schema: {
                const: false,
              },
            },
          },
        },
        {
          type: "Control",
          scope: "#/properties/birthday",
          rule: {
            effect: "HIDE",
            condition: {
              scope: "#/properties/latestUpdates",
              schema: {
                const: false,
              },
            },
          },
        },
      ],
    },
  ],
}

export const uiSchema = {
  type: "Categorization",
  elements: [
    {
      type: "Category",
      label: "Personal Information",
      elements: [personalDetails],
    },
    {
      type: "Category",
      label: "Other Information",
      elements: [otherDetails],
    },
  ],
  options: {
    variant: "stepper",
    showNavButtons: true,
  },
}

export const dataSchema = {
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    city: {
      type: "string",
      enum: ["Select option", "Chennai", "Bangalore", "Coimbatore", "Madurai"],
    },
    address1: {
      type: "string",
    },
    address2: {
      type: "string",
    },
    address3: {
      type: "string",
    },
    address4: {
      type: "string",
    },
    pincode: {
      type: "number",
      minimum: 100000,
      maximum: 999999,
    },
    latestUpdates: {
      type: "boolean",
    },
    emailId: {
      type: "string",
    },
    noOfMailsPerWeek: {
      type: "integer",
    },
    birthday: {
      type: "string",
      format: "date",
    },
    noOfMails: {
      type: "integer",
      minimum: 1,
      maximum: 14,
      default: 7,
    },
  },
  required: ["firstName", "city", "pincode"],
}

export const initialData = {
  latestUpdates: true,
}
