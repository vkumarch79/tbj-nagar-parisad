// संपर्क फ़ॉर्म का संदेश admin तक ईमेल से पहुँचाने की सेवा।
//
// यह Formspree (https://formspree.io) जैसे फ़ॉर्म सेवा से जुड़ता है।
// सेटअप: formspree.io पर मुफ़्त खाता बनाएँ, एक फ़ॉर्म बनाएँ, और उसका
// endpoint (जैसे https://formspree.io/f/xxxxxxx) .env में VITE_CONTACT_ENDPOINT के रूप में रखें।
// हर संदेश admin के ईमेल पर आएगा और Formspree के डैशबोर्ड में भी सेव रहेगा।
//
// अगर endpoint नहीं है, तो फ़ॉर्म उपयोगकर्ता के मेल ऐप को खोल देता है (mailto)।

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || "";

export const isContactConfigured = Boolean(ENDPOINT);

/**
 * @param {{name:string, phone:string, email?:string, type:string, message:string}} data
 * @returns {Promise<void>} सफल होने पर resolve, विफल होने पर reject
 */
export async function submitContact(data) {
  if (!ENDPOINT) {
    throw new Error("CONTACT_ENDPOINT_NOT_SET");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      // ईमेल के विषय में प्रकार और नाम दिखे, ताकि admin एक नज़र में समझ जाए
      _subject: `[${data.type}] ${data.name} (${data.phone})`,
    }),
  });

  if (!res.ok) {
    throw new Error("CONTACT_SEND_FAILED");
  }
}

/**
 * नागरिक प्रतिक्रिया फ़ॉर्म भेजें — उसी endpoint पर, सवाल-जवाब के रूप में
 * @param {Record<string, string>} answers  { "सवाल": "जवाब" }
 * @param {string} subject  ईमेल का विषय
 */
export async function submitFeedback(answers, subject) {
  if (!ENDPOINT) {
    throw new Error("CONTACT_ENDPOINT_NOT_SET");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...answers, _subject: subject }),
  });

  if (!res.ok) {
    throw new Error("FEEDBACK_SEND_FAILED");
  }
}
