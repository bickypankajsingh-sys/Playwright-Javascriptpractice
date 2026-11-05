export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.headerLabel = page.locator('.header_label');
        this.inventoryItemsName = page.locator('.inventory_item_name');
        this.inventoryItemsPrice = page.locator('.inventory_item_price');
        this.inventoryItemsDescription = page.locator('.inventory_item_desc');
        this.inventoryItemsImage = page.locator('.inventory_item_img');
        this.addCartBadge = page.locator('.shopping_cart_badge');
        this.addToCartButton = page.locator('.btn_inventory');
        this.removeFromCartButton = page.locator('.btn_secondary');
        this.title = page.locator('.title');
        this.pageTitle = this.title;
        this.cartButton = page.locator('.shopping_cart_link');
        this.sortButton = page.locator('.product_sort_container');
        this.menuButton = page.locator('#react-burger-menu-btn');
    }

    async isLoaded() {
        await this.pageTitle.waitFor();
    }

    async addItemToCart(itemName) {
        const item = this.page.locator('.inventory_item').filter({
            has: this.page.locator('.inventory_item_name', { hasText: itemName })
        });

        await item.locator('.btn_inventory').click();
    }

    async removeItemFromCart(itemName) {
        const item = this.page.locator('.inventory_item').filter({
            has: this.page.locator('.inventory_item_name', { hasText: itemName })
        });

        await item.locator('.btn_secondary').click();
    }

    async getCartItemCount() {
        const badgeCount = await this.addCartBadge.count();
        if (badgeCount === 0) {
            return 0;
        }

        const countText = await this.addCartBadge.textContent();
        return Number.parseInt(countText ?? '0', 10);
    }

    async sortItemsBy(option) {
        await this.sortButton.selectOption(option);
    }

    async logout() {
        await this.menuButton.click();
        await this.page.locator('#logout_sidebar_link').click();
    }

    async getProductsNames() {
        return await this.inventoryItemsName.allTextContents();
    }

    async getProductsPrices() {
        return await this.inventoryItemsPrice.allTextContents();
    }

    async getproductsnames() {
        return await this.getProductsNames();
    }

    async getproductsprices() {
        return await this.getProductsPrices();
    }

    async clickProductName(productName) {
        const product = this.page.locator('.inventory_item').filter({
            has: this.page.locator('.inventory_item_name', { hasText: productName })
        });

        await product.locator('.inventory_item_name').click();
    }
}
