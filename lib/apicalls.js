"use server"

import { auth } from "auth"

async function getToken() {
  const session = await auth()
  return session.token;
}

export async function get_user() {
  const token = await getToken();

  return fetch(`https://dev.proj-mgmt.com/main/isapi.dll/get_user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      client_id: "9",
    }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return "error";
    }
  });
}