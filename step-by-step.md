---
template: './@theme/Templates/SideBySide.tsx'
seo:
  title: Step-by-step guide to special museum events
  description:  Learn how to find, purchase, and retrieve QR code for entry to special events at the museum using the API.
  image: ./images/SEO%20step-by-step%20guide.png
---

# How to buy a ticket for a special event in the museum?

## Step 1: Find list of all special events in the museum

{% split %}

Open **Query** tab and set date appropriate date range using **startDate** and **endDate**.

Click **Send** to get a list of all special events in the museum. Under Response body
you will see a list of all special events. Pick one you would like to attend.

---

{% replay-openapi
  descriptionFile="products/museum/@v1/museum.yaml"
  operationId="listSpecialEvents"
  environment="https://api.museum-example.com"
  environments={
    "https://api.museum-example.com": {
      "MuseumPlaceholderAuth_username": "username",
      "MuseumPlaceholderAuth_password": "password",
    }
  }
  parameters={
    query: {
      startDate: "2024-09-01",
      endDate: "2024-10-01",
      page: 1,
      limit: 30,
    },
  }
/%}

{% /split %}

---

## Step 2: Buy a ticket for a special event

{% split %}

1. Open **Body** tab
2. Set **eventId** from the list of special events.
3. Set **ticketDate** from the list of special events. We are going to remove this field in the future. Each event should't have a list of dates.
4. Set your **email**.

Finaly click **Send** to buy a ticket for a special event.

---

{% replay-openapi
  descriptionFile="products/museum/@v1/museum.yaml"
  operationId="buyMuseumTickets"
  exampleKey="event_entry"
  requestBody={
    "ticketType": "event",
    "eventId": "dad4bce8-f5cb-4078-a211-995864315e39",
    "ticketDate": "2023-09-05",
    "email": "todd@example.com"
  }
  environment="https://api.museum-example.com"
  environments={
    "https://api.museum-example.com": {
      "MuseumPlaceholderAuth_username": "username",
      "MuseumPlaceholderAuth_password": "password",
    }
  }
/%}

{% /split %}

---

## Step 3: Get a QR code for the ticket

{% split %}

1. Hover on **ticketId** and paste a value form previous response.
2. Click **Send** to get a QR code for the ticket.

---

{% replay-openapi
  descriptionFile="products/museum/@v1/museum.yaml"
  operationId="getTicketCode"
  environment="https://api.museum-example.com"
  environments={
    "https://api.museum-example.com": {
      "MuseumPlaceholderAuth_username": "username",
      "MuseumPlaceholderAuth_password": "password",
    }
  }
/%}

{% /split %}
