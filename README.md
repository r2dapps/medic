<div align="center">

<img src="banner.svg" alt="MEDIC — Offline-First Family Medicine Routine &amp; Inventory Guardian" width="100%" />

<br/><br/>

<img src="telemetry.svg" alt="MEDIC Live Telemetry Monitor" width="100%" />

<br/>

# MEDIC
### Offline-First Family Medicine Routine &amp; Inventory Guardian

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Launch%20MEDIC-0F766E?style=for-the-badge&logo=googlechrome&logoColor=white)](https://r2dapps.github.io/medic/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Capable-14B8A6?style=for-the-badge&logo=pwa&logoColor=white)](https://r2dapps.github.io/medic/)
[![Medical Standards](https://img.shields.io/badge/Standard-NLEM%202022%20%7C%20CDSCO-teal?style=for-the-badge)](https://cdsco.gov.in/)
[![Voice TTS](https://img.shields.io/badge/Speech%20Engine-Indian%20Natural%20Accent-0D9488?style=for-the-badge)](#natural-accent-speech-synthesis)
[![Zero Cloud Privacy](https://img.shields.io/badge/Privacy-100%25%20Client--Side%20IndexedDB-10B981?style=for-the-badge)](#zero-cloud-offline-engine)
[![Published By](https://img.shields.io/badge/Published%20By-R2D%20Apps-115E59?style=for-the-badge)](https://r2dapps.github.io)

<p align="center">
  <strong>A resilient, 100% offline-first Progressive Web Application (PWA) tailored for multi-generational Indian households to track clinical routines, inventory stock depletion, optical packaging recognition, and pharmacy reorders with zero subscription fees, zero cloud surveillance, and authentic natural Indian accent voice guidance.</strong>
</p>

<p align="center">
  <a href="https://r2dapps.github.io/medic/"><strong>[ Launch Web Application ]</strong></a> &nbsp;&bull;&nbsp;
  <a href="#clinical-system-overview"><strong>[ System Overview ]</strong></a> &nbsp;&bull;&nbsp;
  <a href="#core-capabilities"><strong>[ Core Capabilities ]</strong></a> &nbsp;&bull;&nbsp;
  <a href="#clinical-formulary-database"><strong>[ Medicine Catalogue ]</strong></a> &nbsp;&bull;&nbsp;
  <a href="#system-architecture"><strong>[ Architecture ]</strong></a> &nbsp;&bull;&nbsp;
  <a href="#local-development"><strong>[ Development ]</strong></a>
</p>

---

</div>

## Clinical System Overview

<table width="100%">
  <thead>
    <tr>
      <th width="30%" align="left">System Dimension</th>
      <th width="70%" align="left">Clinical &amp; Architectural Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Live Web Application</strong></td>
      <td><a href="https://r2dapps.github.io/medic/">https://r2dapps.github.io/medic/</a></td>
    </tr>
    <tr>
      <td><strong>Primary Repository</strong></td>
      <td><a href="https://github.com/r2dapps/medic">https://github.com/r2dapps/medic</a></td>
    </tr>
    <tr>
      <td><strong>Upstream Engineering</strong></td>
      <td><a href="https://github.com/razeltech/medic">https://github.com/razeltech/medic</a></td>
    </tr>
    <tr>
      <td><strong>Publishing Organization</strong></td>
      <td><strong><a href="https://r2dapps.github.io">R2D Apps</a></strong></td>
    </tr>
    <tr>
      <td><strong>Engineering Author</strong></td>
      <td><strong><a href="https://razeltech.github.io">Razel Tech</a></strong></td>
    </tr>
    <tr>
      <td><strong>Runtime Target</strong></td>
      <td>Modern Web Browsers (Chrome, Edge, Safari, Firefox), Android PWA, iOS PWA</td>
    </tr>
    <tr>
      <td><strong>Storage Engine</strong></td>
      <td>100% Client-Side W3C IndexedDB (16 Atomic Object Stores, Zero Remote Calls)</td>
    </tr>
    <tr>
      <td><strong>Formulary Standards</strong></td>
      <td>National List of Essential Medicines (NLEM 2022) &amp; CDSCO Formulations</td>
    </tr>
    <tr>
      <td><strong>Acoustic Synthesizer</strong></td>
      <td>Harmonic Web Audio Tri-Tone Chimes (D5-A5-D6) with Exponential Decay</td>
    </tr>
  </tbody>
</table>

---

## Core Capability Modules

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <h3>Zero-Cloud Offline Engine</h3>
      <code>STATUS: 100% AIR-GAPPED CAPABLE</code>
      <br/><br/>
      Built strictly to W3C Progressive Web App standards with high-resilience Service Worker caching (<code>sw.js</code>). Runs identically across Android, Apple iOS, Windows, macOS, and Linux desktop browsers. Fully operational in basements, transit, or rural zones with zero cellular connectivity.
    </td>
    <td width="50%" valign="top">
      <h3>NLEM 2022 Clinical Formulary</h3>
      <code>STATUS: 112+ VALIDATED SALTS</code>
      <br/><br/>
      Pre-loaded with 112+ essential medicine formulations conforming to CDSCO and NLEM 2022 standards across 13 therapeutic classes. Three-tier keyboard-accessible fuzzy search instantly populates dosage strengths, chemical molecules, and therapeutic food instructions.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Natural Accent Speech Synthesis</h3>
      <code>STATUS: EN • HI • TE VOICE CALIBRATED</code>
      <br/><br/>
      Dedicated speech prioritization configured for natural Indian phonetics. Prioritizes Microsoft Aarti Online, Apple Rishi, and Google Indian phonetics with normalized 0.88x cadence and 1.04 pitch for elderly auditory clarity in English, Telugu (తెలుగు), and Hindi (हिन्दी).
    </td>
    <td width="50%" valign="top">
      <h3>Harmonic Web Audio Chimes</h3>
      <code>STATUS: D5 - A5 - D6 RESONANCE</code>
      <br/><br/>
      Zero-file Web Audio API algorithmic chime generator. Synthesizes gentle tri-tone acoustic alerts (587 Hz &rarr; 880 Hz &rarr; 1175 Hz) with natural exponential decay ramps, replacing jarring phone alarms with soothing clinical reminders.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>WhatsApp Pharmacy Refill Dispatcher</h3>
      <code>STATUS: 1-TAP STANDARDIZED ORDER</code>
      <br/><br/>
      Compiles pending shortages and depleted stock into clean, standardized WhatsApp order strings formatted for immediate transmission to neighborhood chemists or delivery services without manual typing.
    </td>
    <td width="50%" valign="top">
      <h3>On-Device Packaging OCR Engine</h3>
      <code>STATUS: CLIENT-SIDE TESSERACT.JS</code>
      <br/><br/>
      HTML5 Canvas pre-processing normalizes contrast and applies adaptive binarization before client-side Tesseract.js optical character recognition extracts brand names and salt strengths without transmitting packaging photos to external servers.
    </td>
  </tr>
</table>

---

## Multi-Role Access Control (RBAC)

<table width="100%">
  <thead>
    <tr>
      <th width="33%" align="center">CARETAKER MODE</th>
      <th width="33%" align="center">ADULT MEMBER MODE</th>
      <th width="34%" align="center">SENIOR PATIENT MODE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td valign="top">
        <strong>Administrative Control</strong>
        <ul>
          <li>Prescribe medicine regimens</li>
          <li>Register household members</li>
          <li>Scan blister packaging via OCR</li>
          <li>Record pharmacy purchases</li>
          <li>Manage local database backups</li>
        </ul>
      </td>
      <td valign="top">
        <strong>Operational Execution</strong>
        <ul>
          <li>Log taken and skipped doses</li>
          <li>Track personal daily schedules</li>
          <li>Record expense line items</li>
          <li>Inspect current stock inventory</li>
          <li>Trigger WhatsApp reorders</li>
        </ul>
      </td>
      <td valign="top">
        <strong>Accessible Simplicity</strong>
        <ul>
          <li>High-contrast visual layout</li>
          <li>One-tap dose confirmation</li>
          <li>Aarti natural voice read-aloud</li>
          <li>Large readable font scaling</li>
          <li>Destructive settings locked out</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

---

## Clinical Formulary Database

<details open>
<summary><strong>NLEM 2022 &amp; CDSCO Formulary Classification Reference</strong></summary>
<br/>

<table width="100%">
  <thead>
    <tr>
      <th width="25%" align="left">Clinical Classification</th>
      <th width="35%" align="left">Reference Formulations</th>
      <th width="20%" align="left">Standard Food Timing</th>
      <th width="20%" align="left">Regulatory Standard</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Cardiology &amp; BP</strong></td>
      <td>Telma 40, Telma AM, Amlong 5, Cilacar 10, Starpress XL 50</td>
      <td>After Food</td>
      <td>CDSCO / NLEM 2022</td>
    </tr>
    <tr>
      <td><strong>Endocrinology (Diabetes)</strong></td>
      <td>Glycomet 500, Glycomet-GP 1/2, Januvia 100, Galvus 50</td>
      <td>Before / With Food</td>
      <td>NLEM 2022</td>
    </tr>
    <tr>
      <td><strong>Gastroenterology</strong></td>
      <td>Pan 40, Pan-D, Omez 20, Pantocid 40, Gelusil</td>
      <td>Before Food (Empty Stomach)</td>
      <td>NLEM 2022</td>
    </tr>
    <tr>
      <td><strong>Analgesics &amp; Antipyretics</strong></td>
      <td>Dolo 650, Calpol 650, Combiflam, Zerodol-P</td>
      <td>After Food</td>
      <td>CDSCO / NLEM 2022</td>
    </tr>
    <tr>
      <td><strong>Thyroid Management</strong></td>
      <td>Thyronorm 25/50/75/100 mcg, Eltroxin</td>
      <td>Early Morning (Empty Stomach)</td>
      <td>CDSCO</td>
    </tr>
    <tr>
      <td><strong>Pulmonology (Asthma)</strong></td>
      <td>Asthalin 100 mcg Inhaler, Budecort, Montair LC</td>
      <td>Anytime / Night</td>
      <td>NLEM 2022</td>
    </tr>
    <tr>
      <td><strong>Nutritional Supplements</strong></td>
      <td>Becosules Z, Neurobion Forte, Shelcal 500, Evion 400</td>
      <td>After Food</td>
      <td>CDSCO</td>
    </tr>
    <tr>
      <td><strong>Infectious Diseases</strong></td>
      <td>Augmentin 625 Duo, Azithral 500, Taxim-O 200</td>
      <td>After Food</td>
      <td>CDSCO / NLEM 2022</td>
    </tr>
  </tbody>
</table>

</details>

---

## System Architecture

```text
+-------------------------------------------------------------------------+
|                           MEDIC CLIENT (PWA)                            |
+------------------------------------+------------------------------------+
| UI LAYER                           | LOGIC & ENGINES                    |
| - Semantic HTML5 Responsive Shell  | - Web Speech API (Indian Cadence)  |
| - Multilingual Dictionary Engine   | - Web Audio API (Harmonic Chimes)  |
| - Tailwind CSS Design Architecture | - 15-Second Due Dose Scheduler     |
| - Optical Strip Canvas OCR Preproc | - WhatsApp String Refill Builder   |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                  W3C INDEXEDDB STORAGE (16 ATOMIC STORES)               |
+-------------------+--------------------+-------------------+------------+
| Households        | Caretakers         | FamilyMembers     | Conditions |
| MedicineCatalogue | MemberMedicines    | MedicineSchedules | DoseHistory|
| MedicineInventory | InventoryAdjustments| Purchases        | PurchaseItems|
| RefillHistory     | OCRRecords         | NotificationPrefs | AppSettings|
+-------------------+--------------------+-------------------+------------+
```

---

## Local Development

### 1. Clone Repository
```bash
git clone https://github.com/r2dapps/medic.git
cd medic
```

### 2. Run Local Development Server
Because MEDIC is completely zero-backend and offline-first, no heavy build tools or runtime installations are mandated:
```bash
npx serve .
```
Or with Python:
```bash
python -m http.server 8000
```

### 3. Open Application
Navigate to `http://localhost:8000` or `http://localhost:3000` in any modern browser.

---

## License &amp; Mandatory Attribution

Copyright (c) 2026 **[Razel Tech](https://razeltech.github.io)** and **[R2D Apps](https://r2dapps.github.io)**. All rights reserved.

Licensed under the **MIT License with Mandatory Author Attribution**. Any public deployment, mirror, or distribution must attribute the author as **Razel Tech** and include active hyperlinks to [https://razeltech.github.io](https://razeltech.github.io) and [https://r2dapps.github.io](https://r2dapps.github.io).
