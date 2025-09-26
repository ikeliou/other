---
layout: default
title: Home
---

# Diff 無水平捲軸示範

下方是 `diff` 程式碼區塊；我們用自訂 CSS 強制「自動換行 + 不出現水平捲軸」。

```diff
diff --git a/app/main.py b/app/main.py
index 3b18e92..94f5d42 100644
--- a/app/main.py
+++ b/app/main.py
@@ -1,5 +1,8 @@
-def greet(name): print("Hello " + name)   # 這行很長很長很長很長很長很長很長很長很長，預設情況下容易造成水平捲軸
+def greet(name):
+    print(f"Hello, {name}!")              # 換行後也能正常高亮
+    print("Welcome to GitHub diff demo 🎉")
