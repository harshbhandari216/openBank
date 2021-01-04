export interface NavigationItem {
    text: string;
    cssClass: 'normal' | 'default' | 'standard';
    onClick: () => void;
}
