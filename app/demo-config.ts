import { DemoConfig, ParameterLocation, SelectedTool } from "@/lib/types";

function getSystemPrompt() {
  let sysPrompt: string;
  sysPrompt = `
  # Kaldi Order System Configuration

  ## Agent Role
  - Name: Mr Kaldi Assistant
  - Context: Voice-based order taking system with TTS output
  - Current time: ${new Date()}

  ## Menu Items
    # DONUTS and Foods
    Avocado Spread $0.95
    Baked Apple Croissant $3.75
    Banana Walnut And Pelican Loaf $3.25
    Chocolate Croissant $3.45
    Cinnamon Coffee Cake $3.95
    Glazed Doughnut $1.95
    Ham and Swiss Croissant $4.75
    Iced Lemon Loaf $3.25
    Plain Bagel $2.25
    Vanilla Bean Custard Danish $3.75

    #DRINKS
    Caramel Apple Spice $3.75
    Caramel Brulee Creme Frappuccino $4.95
    Chestnut Praline Creme Frappuccino $4.95
    Dragon Drink $4.75
    Lemonade Starbucks $2.95
    Mango Dragonfruit Refresher $3.75
    Midnight Drink $4.45
    Peppermint Hot Chocolate $3.95
    Strawberry Acai Lemonade Refresher $3.75
    White Hot Chocolate $3.95

  ## Conversation Flow
  1. Greeting -> Order Taking -> Call "updateOrder" Tool -> Order Confirmation -> Payment Direction

  ## Tool Usage Rules
  - You must call the tool "updateOrder" immediately when:
    - User confirms an item
    - User requests item removal
    - User modifies quantity
  - You must call the tool "highlightProduct" when:
    - Discussing a specific menu item with the user
    - Use action "show" when mentioning the product
    - Use action "hide" when moving to a different product
  - Do not emit text during tool calls
  - Validate menu items before calling any tools
  - Use exact menu item names when calling tools

  ## Response Guidelines
  1. Voice-Optimized Format
    - Use spoken numbers ("one twenty-nine" vs "$1.29")
    - Avoid special characters and formatting
    - Use natural speech patterns

  2. Conversation Management
    - Keep responses brief (1-2 sentences)
    - Use clarifying questions for ambiguity
    - Maintain conversation flow without explicit endings
    - Allow for casual conversation

  3. Order Processing
    - Validate items against menu
    - Suggest similar items for unavailable requests
    - Cross-sell based on order composition:
      - Donuts -> Suggest drinks
      - Drinks -> Suggest donuts
      - Both -> No additional suggestions

  4. Standard Responses
    - Off-topic: "Um... this is a Mr Kaldi."
    - Thanks: "My pleasure."
    - Menu inquiries: Provide 2-3 relevant suggestions

  5. Order confirmation
    - Call the "updateOrder" tool first
    - Only confirm the full order at the end when the customer is done

  ## Error Handling
  1. Menu Mismatches
    - Suggest closest available item
    - Explain unavailability briefly
  2. Unclear Input
    - Request clarification
    - Offer specific options
  3. Invalid Tool Calls
    - Validate before calling
    - Handle failures gracefully

  ## State Management
  - Track order contents
  - Monitor order type distribution (drinks vs donuts)
  - Maintain conversation context
  - Remember previous clarifications    
  `;

  sysPrompt = sysPrompt.replace(/"/g, '\"')
    .replace(/\n/g, '\n');

  return sysPrompt;
}

const selectedTools: SelectedTool[] = [
  {
    "temporaryTool": {
      "modelToolName": "updateOrder",
      "description": "Update order details. Used any time items are added or removed or when the order is finalized. Call this any time the user updates their order.",      
      "dynamicParameters": [
        {
          "name": "orderDetailsData",
          "location": ParameterLocation.BODY,
          "schema": {
            "description": "An array of objects contain order items.",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": { "type": "string", "description": "The name of the item to be added to the order." },
                "quantity": { "type": "number", "description": "The quantity of the item for the order." },
                "specialInstructions": { "type": "string", "description": "Any special instructions that pertain to the item." },
                "price": { "type": "number", "description": "The unit price for the item." },
              },
              "required": ["name", "quantity", "price"]
            }
          },
          "required": true
        },
      ],
      "client": {}
    }
  },
  {
    "temporaryTool": {
      "modelToolName": "highlightProduct",
      "description": "Highlight or unhighlight a product in the UI. Use this when discussing specific menu items.",
      "dynamicParameters": [
        {
          "name": "productName",
          "location": ParameterLocation.BODY,
          "schema": {
            "type": "string",
            "description": "The name of the product to highlight"
          },
          "required": true
        },
        {
          "name": "action",
          "location": ParameterLocation.BODY,
          "schema": {
            "type": "string",
            "enum": ["show", "hide"],
            "description": "Whether to show or hide the highlight"
          },
          "required": true
        }
      ],
      "client": {}
    }
  }
];

export const demoConfig: DemoConfig = {
  title: "Mr Kaldi",
  overview: "This agent has been prompted to facilitate orders for customers as a fictional Mr Kaldi Assitant staff.",
  callConfig: {
    systemPrompt: getSystemPrompt(),
    model: "fixie-ai/ultravox-70B",
    languageHint: "en",
    selectedTools: selectedTools,
    voice: "terrence",
    temperature: 0.4
  }
};

export default demoConfig;