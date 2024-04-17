# MONGODB

```javascript
// sometimes we use multiple saving insatnaces in multiple databases like
await user.save();
await message.save();
await conversation.save();

// for the above condition the query done is run in sequential order like when first is saved then next one run , due to which it can sometimes take large times , to resolve this ssue we can use 

await Promise.all([
    await user.save(),
await message.save(),
await conversation.save()
])

// for the above condtion all query will run parallely making it a little bit faster 