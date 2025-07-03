# Drug Wars Remake

A modern, mobile-responsive web remake of the classic 1984 Drug Wars game. Built with vanilla JavaScript, HTML5, and CSS3, originally built using Claude Opus 4 in a single one-shot prompt (improvements were added later in further commits). Runs in a single file.

## 🎮 Play Now

[Play Drug Wars Remake](https://manicinc.github.io/drug-wars/)

## 📖 About

Drug Wars is a turn-based strategy game where you play as a street dealer trying to make as much money as possible in 30 days. Buy low, sell high, manage your debt, and avoid the dangers of the streets!

Originally created by John E. Dell in 1984, this remake brings the classic gameplay to modern browsers with a mobile-first responsive design.

## 🎯 Features

- **Classic Gameplay**: Faithful to the original with all core mechanics
- **Full Keyboard Control Support**: Complete MS-DOS style keyboard navigation
- **Mobile Responsive**: Touch-friendly interface with mobile optimizations
- **6 NYC Locations**: Travel between Bronx, Ghetto, Central Park, Manhattan, Coney Island, and Brooklyn
- **Dynamic Pricing**: Watch for police busts and shortages that affect prices
- **Random Events**: Encounter police, find drugs/cash, or get mugged while traveling
- **Inventory Management**: Limited carrying capacity with option to buy a coat for more space
- **Health System**: Take damage from encounters, heal at the hospital
- **Enhanced Items**: Body armor, fake ID, burner phone, and medical supplies
- **Combat System**: Strategic encounters with different enemy types
- **Item Durability**: Equipment can break and needs replacement

## ⌨️ Keyboard Controls

### **Drug Navigation**
- `↑` `↓` or `W` `S` or `Tab` - Navigate between drugs
- `b` or `←` - Buy selected drug
- `Shift+S` or `→` - Sell selected drug
- `Enter` or `Space` - Smart action (buy if you don't own, sell if you do)

### **Travel & Location**
- `t` - Open travel menu
- `1-6` - Instant travel to locations (1=Bronx, 2=Ghetto, 3=Central Park, 4=Manhattan, 5=Coney Island, 6=Brooklyn)

### **Quick Actions**
- `Shift+B` - Bank
- `l` or `Shift+L` - Loan Shark
- `h` - Hospital
- `u` - Use medical items (first aid kit or painkillers)
- `c` - Buy coat (+50 carrying space)
- `g` - Buy gun (protection)

### **System Controls**
- `?` or `/` - Help/Info
- `Shift+H` - Help/Info (alternative)
- `Esc` - Close modals/Cancel

### **Alternative Shortcuts**
- `Ctrl+[key]` - Alternative for any action (Ctrl+B for Bank, Ctrl+T for Travel, etc.)
- `W/A/S/D` - Alternative navigation for gamers

### **Modal Controls**
- `Enter` - Confirm action in modals
- `Esc` - Cancel/Close modals
- `1-6` - Quick location selection in travel modal

### **Pro Tips**
- **Enter/Space on drugs**: Smart action - buys if you don't have any, sells if you do!
- **Number keys**: Instant travel without opening menu
- **Shift+Letter**: Capital letters for less common actions
- **Arrow keys**: Full navigation and quick buy/sell
- **Keyboard mode**: Game automatically detects keyboard usage and shows visual indicators

## 🕹️ How to Play

1. **Buy Low, Sell High**: Check prices in different locations and trade strategically
2. **Manage Your Debt**: Your $5,500 debt grows 10% daily - pay it off!
3. **Travel Wisely**: Each trip advances one day and may trigger random events
4. **Stay Healthy**: Getting arrested or mugged reduces health - visit the hospital
5. **Expand Capacity**: Buy a coat (+50 space) or duffel bag (+75 space)
6. **Get Protection**: Buy a gun to avoid trouble, body armor to reduce damage
7. **Use the Bank**: Store money safely to protect from muggings
8. **Buy Medical Supplies**: Keep painkillers and first aid kits for emergencies
9. **Strategic Items**: Fake ID and burner phone help avoid police encounters

## 🏥 Enhanced Health System

- **Health Decay**: Lose 2-5 health daily from stress and lifestyle
- **Performance Impact**: Low health = worse deals, more danger, higher prices
- **Critical Health**: Below 30% health dramatically increases risk of bad events
- **Medical Items**: 
  - Painkillers ($25): +10 health, stackable up to 10
  - First Aid Kit ($50): +20 health, stackable up to 5
- **Hospital**: Expensive at $200 per health point

## 🛡️ Strategic Items

- **Body Armor ($800)**: Reduces damage by 50%, can break after 3-5 hits
- **Fake ID ($300)**: 50% less likely to be caught by police
- **Burner Phone ($150)**: Warns of police raids 25% of the time
- **Trench Coat ($200)**: +50 carrying space, can get damaged
- **Duffel Bag ($400)**: +75 carrying space, can get damaged
- **Gun ($500)**: Protection from muggers and police, can misfire over time

## ⚔️ Combat System

- **Dynamic Encounters**: 5 enemy types with increasing difficulty
- **Win Chances**: Based on your items, health, and day progression
- **Strategic Rewards**: Cash, drugs, health, or intel for victories
- **Item Durability**: Combat damages your equipment over time
- **Health Impact**: Poor health reduces combat effectiveness

## 🏆 Rankings

Your final net worth determines your ranking:

- **< $0**: Street Junkie
- **< $10,000**: Small Time Dealer  
- **< $50,000**: Neighborhood Supplier
- **< $100,000**: Drug Lord
- **< $500,000**: Kingpin
- **$500,000+**: Pablo Escobar

## 🎮 Accessibility

- **Full Keyboard Support**: Complete navigation without mouse
- **Screen Reader Compatible**: ARIA labels and semantic HTML
- **High Contrast Mode**: Supports reduced motion preferences
- **Mobile Friendly**: Touch-optimized interface
- **Keyboard Mode Indicator**: Visual feedback for keyboard users

## 🛠️ Technical Details

- **Pure Vanilla JavaScript**: No frameworks or dependencies
- **Single File**: Entire game in one HTML file
- **Mobile First**: Responsive design that works on all devices
- **Local Storage**: Persistent game state and preferences
- **GitHub Integration**: Live stats from repository
- **Cross-Platform**: Works on desktop, mobile, and tablet

## 🙏 Credits

- Original Drug Wars by John E. Dell (1984)
- Remake by [manic.agency](https://manic.agency)
- Enhanced version powered by Claude AI
- Inspired by the classic DOS/BBS game culture

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

Found a bug or have a suggestion? Please [open an issue](https://github.com/manicinc/drug-wars/issues) on GitHub.

---

*Made with ❤️ by [manic.agency](https://manic.agency) | [Play more games](https://games.manic.agency/)*