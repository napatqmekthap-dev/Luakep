# เหลือเก็บ · ประวัติเวอร์ชัน / Version history

เลขเวอร์ชัน = `1.` + เลข cache ใน `sw.js` ทุกการอัปเดตต้องเพิ่มบรรทัดบนสุดในไฟล์นี้และใน `CHANGELOG` ของ `index.html`
Version = `1.` + the cache number in `sw.js`. Every release adds a line at the top here and in `CHANGELOG` inside `index.html`.

| เวอร์ชัน | วันที่ | อะไรเปลี่ยน | What changed |
|---|---|---|---|
| 1.60 | 2026-10-13 | ยอดเงินหลักล้านไม่ล้นกรอบแล้ว: ตัวเลขย่อขนาดให้พอดีเอง ถ้ายาวมากจะตัดสตางค์หรือย่อเป็น “ล้าน” (แตะค้างดูยอดเต็มได้) · ช่องกรอกยอดย่อตัวอักษรตามความยาว · ยอดที่มีสตางค์แสดงทศนิยม 2 หลักเสมอ | Big amounts now fit: numbers shrink to fit their box, and very long ones drop the satang or switch to “M” (the full amount is in the tooltip) · the amount box shrinks as you type · amounts with satang always show two decimals |
| 1.59 | 2026-10-11 | ถามน้องโอ่งได้ เช่น “เดือนนี้กาแฟไปเท่าไหร่” · อ่านสลิปได้ครั้งละ 30 ใบ ข้ามใบที่เคยอ่านและกันรายการซ้ำ · นับเดือนตามรอบเงินเดือนได้ · บอกล่วงหน้าว่างบจะหมดวันไหน · รอบบัตรเครดิตพร้อมเตือนวันจ่าย · แป้นเครื่องคิดเลขตอนกรอกยอด | Ask Nong Ong, e.g. “how much on coffee this month?” · read up to 30 slips at once, skipping ones already read and catching repeats · months can follow your pay cycle · a heads-up on the day your budget runs out · credit-card cycles with due-date reminders · calculator keypad for amounts |
| 1.58 | 2026-10-11 | จดด้วยประโยคเดียว พิมพ์หรือพูดก็ได้ บอกวัน เวลา หมวด และหลายรายการพร้อมกัน · บันทึกเวลาของรายการ · เก็บรูปสลิปไว้กับรายการ · งบรวมทั้งเดือนพร้อมเส้นงบบนโอ่ง · การ์ดใช้ไปวันนี้ · แถบเมนูด้านล่าง | One-sentence entry by typing or speaking, with date, time, category and several items at once · times on entries · slip pictures kept with entries · whole-month budget with a line on the jar · spent-today card · bottom menu bar |
| 1.57 | 2026-10-11 | ข้อมูลปลอดภัยขึ้น: บันทึกไม่สำเร็จจะเตือนทันที ข้อมูลในเครื่องเสียหายจะกู้คืนจากสำเนาอัตโนมัติ เปิดสองหน้าต่างพร้อมกันไม่ทับกัน และถ้าแอปมีปัญหาจะมีหน้าช่วยเหลือแทนหน้าจอว่าง | Safer data: failed saves warn you right away, damaged data is restored from a copy automatically, two open windows no longer overwrite each other, and a problem shows a help screen instead of a blank page |
| 1.56 | 2026-10-11 | ลื่นขึ้นทั้งแอป: เลื่อนรายการยาวๆ ได้ลื่นขึ้น กดบันทึกแล้วหน้าต่างปิดทันที เปลี่ยนเดือนเร็วขึ้น พิมพ์จำนวนเงินไม่สะดุด และของตกแต่งพื้นหลังหยุดพักระหว่างเลื่อน | Smoother everywhere: long lists scroll better, the sheet closes instantly on save, month changes are quicker, typing amounts no longer stutters, and background decorations rest while you scroll |
| 1.55 | 2026-10-11 | เลื่อนลื่นขึ้นเมื่อเปิดเอฟเฟกต์เต็ม: แก้ภาพหน่วงตอนถือมือถือ (การเอียงน้ำในโอ่ง) พื้นหลังและแถบด้านบนเบาเครื่องขึ้น และแก้บางส่วนไม่แสดงจนต้องเลื่อนขึ้นลงหลายรอบ | Smoother scrolling with full effects: fixed the phone-tilt water effect slowing everything down, lighter background and top bar, and sections that stayed invisible until you scrolled back and forth now always appear |
| 1.54 | 2026-10-11 | การ์ดบนหน้าหลักแต่งตามเทศกาลเหมือนน้องโอ่ง: ธงประดับบนการ์ดยอดเงิน สีปุ่ม และของตกแต่งตามเทศกาล ปิดได้ในตู้เสื้อผ้า | Home cards dress up for festivals with Nong Ong: a garland on the balance card, accent colours and small decorations. Turn it off in the wardrobe |
| 1.53 | 2026-10-11 | สรุปวันนี้ตอนค่ำ แจ้งเตือนแบบรู้ใจ นับถอยหลังวันเงินเดือนออก ปฏิทินสีของเดือน และสรุปสัปดาห์ทุกวันจันทร์ | Evening wrap-up, smarter reminders, payday countdown, month colour calendar and a Monday weekly recap |
| 1.52 | 2026-10-11 | ใส่เลขเวอร์ชันทุกครั้งที่อัปเดต และดูประวัติทุกเวอร์ชันย้อนหลังได้ | Every update now has a version number, with the full version history |
| 1.51 | 2026-10-11 | เอฟเฟกต์ลื่นขึ้น: ฝนแบบใหม่ เมฆนุ่มขึ้น ลดภาพเคลื่อนไหวที่วิ่งพร้อมกัน และหยุดส่วนที่มองไม่เห็น | Smoother effects: new rain, softer clouds, fewer animations at once, off-screen motion paused |
| 1.50 | 2026-10-11 | น้ำในโอ่งขึ้นตามตอนพิมพ์ยอดเงินเริ่มต้น ที่มายอดเงินนับเลขขึ้น รายการนำเข้าหล่นลงในรายการ ตู้โชว์มีประกาย | Water rises as you type the opening balance, balance explainer counts up, imported rows drop in, cabinet glints |
| 1.49 | 2026-10-11 | จัดระเบียบเบื้องหลังและเพิ่มชุดทดสอบอัตโนมัติ ให้แอปเสถียรขึ้น | Behind-the-scenes tidy-up and automated tests for a steadier app |
| 1.48 | 2026-10-11 | คู่มือวิธีใช้ หน้ามีอะไรใหม่ และส่งความเห็นถึงผู้พัฒนาทาง LINE | How-to guide, What’s new, and feedback to the developer on LINE |
| 1.47 | 2026-10-11 | น้ำในโอ่งลดตามเงินที่เหลือจริง และเปิดครั้งแรกเป็นภาษาไทย | Water level follows the money you have left; Thai on first launch |
| 1.46 | 2026-10-11 | ครั้งแรกเริ่มจากโอ่งว่าง แล้วน้องโอ่งถามยอดเงินที่มี | First run starts with an empty jar and asks your starting balance |
| 1.45 | 2026-10-11 | พูดเพื่อจดรายการ สำรองข้อมูลไป Google Drive นำเข้า CSV จากธนาคาร สรุปเป็น PDF และโหมดประหยัดแบต | Speak to log, Google Drive backup, bank CSV import, PDF summary, battery saver |
| 1.44 | 2026-10-11 | ปุ่มล้างข้อมูลทั้งหมด ใน ตั้งค่า › ข้อมูล | Erase all data in Settings › Data |
| 1.43 | 2026-10-11 | น้องโอ่งพูดได้ ปากขยับตามเสียง | Nong Ong talks, with a moving mouth |
| 1.42 | 2026-10-11 | เพิ่มเครดิต Developed by Napat Mekthap | Added credit: Developed by Napat Mekthap |
| 1.41 | 2026-10-11 | ท่าทางสัมผัส (ปัด กดค้าง เขย่า) และภาพเคลื่อนไหวของสภาพอากาศ | Touch gestures (swipe, hold, shake) and weather motion |
| 1.40 | 2026-10-11 | พื้นหลังตามสภาพอากาศจริง น้องโอ่งถือร่มหรือใส่แว่นกันแดดตามอากาศ | Live weather background; Nong Ong dresses for the weather |
| 1.39 | 2026-10-11 | เลเวลน้องโอ่ง เหรียญรางวัล และชุดที่ปลดล็อกได้ | Nong Ong levels, badges and unlockable outfits |
| 1.38 | 2026-10-11 | เก็บรายละเอียดทั้งแอปและเพิ่มเอฟเฟกต์ | Polish pass and more effects |
| 1.37 | 2026-10-11 | น้ำเอียงตามมือถือ เทน้ำออกตอนใช้เงิน ตราประทับเมื่อครบเป้า ลบแบบแตกกระจาย และนับวันไม่ใช้เงินติดกัน | Tilting water, pour-out, goal stamp, shatter delete, no-spend streak |
| 1.36 | 2026-10-11 | ภาพเคลื่อนไหวชุดใหญ่: ค่อยๆ โผล่ตอนเลื่อน ระลอกตอนแตะ น้ำกระฉอก ปัดเปลี่ยนเดือน | Motion pack: scroll reveal, ripples, jar slosh, month swipe |
| 1.35 | 2026-10-11 | เก็บงานธีมศิลาดล และติดตั้งบนหน้าจอหลัก iPhone ได้ | Celadon finishing touches and iPhone home-screen support |
| 1.34 | 2026-10-10 | ตัวช่วยลดหย่อนภาษีปี 2569: ติดป้ายรายการ เพดานลดหย่อน และประมาณภาษี | Tax deduction helper for 2026: tags, caps and estimated tax |
| 1.33 | 2026-10-10 | ลายรานเคลือบบนการ์ดยอดเงินและหน้าล็อก แสงวาบบนน้องโอ่ง | Crackle glaze on the balance card and lock screen; glint on Nong Ong |
| 1.32 | 2026-10-10 | ธีมศิลาดลทุกหน้า: สตอรี่ การ์ดแชร์ และไอคอนแอปใหม่ | Celadon everywhere: story, share card and a new app icon |
| 1.31 | 2026-10-10 | ธีมศิลาดลแบบเครื่องลายคราม ตั้งเป็นค่าเริ่มต้น | Celadon porcelain theme, now the default |
| 1.30 | 2026-10-10 | ช่องกรอกเงินตัวใหญ่ หัวข้อนุ่มขึ้น ช่อง PIN สวยขึ้น | Big amount fields, calmer titles, nicer PIN field |
| 1.29 | 2026-10-10 | รายการประจำเป็นไทม์ไลน์วันครบกำหนด แตะเพื่อบอกว่าจ่ายแล้ว | Recurring items as a due-date timeline, tap to mark paid |
| 1.28 | 2026-10-10 | แถบงบบอกความเร็วการใช้จ่าย กราฟโดนัทละเอียดขึ้น ไอคอนแอปพาสเทล | Budget pace marker, richer donut chart, pastel app icon |
| 1.27 | 2026-10-10 | ปรับข้อความอ่านสลิปในเครื่องให้อ่านง่ายขึ้น | Clearer on-device slip reading note |
| 1.26 | 2026-10-10 | อ่านสลิปภาษาไทยในเครื่อง แชร์สลิปเข้าแอป ล็อกแอปด้วยลายนิ้วมือ/PIN ซ่อนยอดเงิน ปุ่ม + เมนูเดียว | On-device Thai slip reading, share slips in, fingerprint/PIN lock, hide balances, one + menu |
| 1.25 | 2026-10-10 | กระเป๋าเงินและการโอน หารบิล ภาพรวม 6 เดือน การเตือน และจุดกู้คืน | Wallets and transfers, split bills, 6-month insights, reminders, restore points |
| 1.24 | 2026-10-10 | น้ำไหลตามระดับเงิน ส่วนบนยุบตอนเลื่อน ตัวเลขหมุน แถบงบแบบของเหลว | Flowing water, collapsing header, rolling numbers, liquid budget bars |
| 1.23 | 2026-10-10 | โอ่งในหน้าจดรายการ รายการรายวันละเอียดขึ้น โอ่งเป้าหมาย เมนูตั้งค่าใหม่ | Live jar when adding, richer daily list, goal jars, new settings menu |
| 1.22 | 2026-10-10 | แก้คำภาษาอังกฤษบางจุด | English wording fixes |
| 1.21 | 2026-10-10 | ชุดเทศกาลของน้องโอ่ง ฟอนต์ Mitr เสียงเหรียญ และชุดสี | Festival outfits, Mitr font, coin sounds, colour palettes |
| 1.20 | 2026-10-10 | รองรับเบราว์เซอร์ที่เล่นเอฟเฟกต์ไม่ได้ | Works on browsers without effects support |
| 1.19 | 2026-10-10 | ฉากเปิดแอป น้องโอ่งขยับได้ เหรียญบิน กราฟค่อยๆ วาด | Intro scene, living mascot, flying coins, chart draw-in |
| 1.18 | 2026-10-10 | แก้การเลือกธีมในบางเบราว์เซอร์ | Theme detection fix |
| 1.17 | 2026-10-10 | วงแหวนความคืบหน้าเป้าหมาย ฉลองเมื่อสำเร็จ สลับธีมสว่าง/มืด | Goal ring, celebrations, light/dark switch |
| 1.16 | 2026-10-10 | สตอรี่และการ์ดแชร์สีพาสเทล หน้าว่างมีน้องโอ่ง | Pastel story and share card, mascot empty states |
| 1.15 | 2026-10-10 | แก้ปุ่มเบียดในหน้าตั้งค่า | Fixed squashed settings buttons |
| 1.14 | 2026-10-10 | ทางลัดจากไอคอนแอป: จดรายจ่าย จดรายรับ ค้นหา | App icon shortcuts: add expense, add income, search |
| 1.13 | 2026-10-10 | ปุ่มตอบสนองตอนกด ตัวเลขนับขึ้น และแจ้งเตือนเมื่อบันทึก | Press feedback, count-up numbers, save toast |
| 1.12 | 2026-10-10 | หน้าตาใหม่ธีม Bento Pastel (สว่างและมืด) | New Bento Pastel look (light and dark) |
| 1.11 | 2026-10-10 | ค้นหาด้วยจำนวนเงินแบบตรงตัว | Search matches amounts exactly |
| 1.10 | 2026-10-10 | ค้นหารายการได้ทุกเดือน | Search across all months |
| 1.9 | 2026-10-10 | เตือนให้สำรองข้อมูล และเพิ่มหมวดหมู่เองได้ | Backup reminder and custom categories |
| 1.0–1.8 | ก่อน 2026-10-10 | รุ่นแรก: จดรายรับรายจ่าย อ่านสลิป งบรายหมวด เป้าหมายออม รายการประจำ ยอดยกมา สตอรี่สรุปเดือน ธีมมืด ติดตั้งเป็นแอปและใช้ออฟไลน์ได้ | First releases: income and expenses, slip reading, budgets, savings goals, recurring items, carry-over, monthly story, dark theme, installable and offline |
