/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: hello

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessage(
  "*🎫 How to withdraw?\nAll withdrawals are paid out on 27 FEBRUARY 2023 automatically to your BTC wallet.\n\n   ✅ Available Balance: *" +
    balance.value() +
    " BTC*\n💼 Wallet Address: *" +
    wallet +
    "*\n\n📤 Enter the amount to be withdrawn to your wallet below*"
)

