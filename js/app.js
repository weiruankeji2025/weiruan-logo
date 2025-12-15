// Logo Generator Application
document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const elements = {
        // Text inputs
        brandName: document.getElementById('brandName'),
        slogan: document.getElementById('slogan'),
        fontFamily: document.getElementById('fontFamily'),
        fontSize: document.getElementById('fontSize'),
        fontSizeValue: document.getElementById('fontSizeValue'),
        fontWeight: document.getElementById('fontWeight'),

        // Color inputs
        textColor: document.getElementById('textColor'),
        textColorHex: document.getElementById('textColorHex'),
        iconColor: document.getElementById('iconColor'),
        iconColorHex: document.getElementById('iconColorHex'),
        bgColor: document.getElementById('bgColor'),
        bgColorHex: document.getElementById('bgColorHex'),

        // Icon settings
        iconPosition: document.getElementById('iconPosition'),
        iconSize: document.getElementById('iconSize'),
        iconSizeValue: document.getElementById('iconSizeValue'),
        iconGrid: document.getElementById('iconGrid'),

        // Layout settings
        spacing: document.getElementById('spacing'),
        spacingValue: document.getElementById('spacingValue'),
        padding: document.getElementById('padding'),
        paddingValue: document.getElementById('paddingValue'),
        borderRadius: document.getElementById('borderRadius'),
        borderRadiusValue: document.getElementById('borderRadiusValue'),

        // Preview elements
        previewBox: document.getElementById('previewBox'),
        logoContent: document.getElementById('logoContent'),
        logoIcon: document.getElementById('logoIcon'),
        brandNamePreview: document.getElementById('brandNamePreview'),
        sloganPreview: document.getElementById('sloganPreview'),

        // Buttons
        resetBtn: document.getElementById('resetBtn'),
        downloadPng: document.getElementById('downloadPng'),
        downloadPngLarge: document.getElementById('downloadPngLarge'),

        // Templates
        templatesGrid: document.getElementById('templatesGrid')
    };

    // Current state
    let currentIcon = 'fas fa-star';

    // Default values
    const defaults = {
        brandName: '我的品牌',
        slogan: '',
        fontFamily: "'Noto Sans SC', sans-serif",
        fontSize: 48,
        fontWeight: '400',
        textColor: '#333333',
        iconColor: '#4A90E2',
        bgColor: '#FFFFFF',
        iconPosition: 'left',
        iconSize: 48,
        spacing: 16,
        padding: 40,
        borderRadius: 0,
        icon: 'fas fa-star'
    };

    // Initialize the application
    function init() {
        renderIconGrid();
        renderTemplates();
        setupEventListeners();
        updatePreview();
    }

    // Render icon grid
    function renderIconGrid() {
        elements.iconGrid.innerHTML = '';

        window.iconLibrary.forEach((icon, index) => {
            const iconItem = document.createElement('div');
            iconItem.className = 'icon-item' + (icon.class === currentIcon ? ' active' : '');
            iconItem.innerHTML = `<i class="${icon.class}"></i>`;
            iconItem.title = icon.name;
            iconItem.addEventListener('click', () => selectIcon(icon.class, iconItem));
            elements.iconGrid.appendChild(iconItem);
        });
    }

    // Select icon
    function selectIcon(iconClass, element) {
        // Remove active class from all icons
        document.querySelectorAll('.icon-item').forEach(item => item.classList.remove('active'));

        // Add active class to selected icon
        element.classList.add('active');

        // Update current icon
        currentIcon = iconClass;

        // Update preview
        updatePreview();
    }

    // Render templates
    function renderTemplates() {
        elements.templatesGrid.innerHTML = '';

        window.logoTemplates.forEach((template, index) => {
            const card = document.createElement('div');
            card.className = 'template-card';
            card.innerHTML = `
                <div class="template-preview" style="background-color: ${template.bgColor};">
                    <div style="display: flex; align-items: center; gap: ${template.spacing}px;
                         flex-direction: ${template.iconPosition === 'top' ? 'column' : 'row'};">
                        <i class="${template.icon}" style="font-size: ${template.iconSize * 0.6}px; color: ${template.iconColor};"></i>
                        <span style="font-family: ${template.fontFamily}; font-size: ${template.fontSize * 0.5}px;
                              font-weight: ${template.fontWeight}; color: ${template.textColor};">
                            ${template.brandName}
                        </span>
                    </div>
                </div>
                <div class="template-name">${template.name}</div>
            `;
            card.addEventListener('click', () => applyTemplate(template));
            elements.templatesGrid.appendChild(card);
        });
    }

    // Apply template
    function applyTemplate(template) {
        elements.brandName.value = template.brandName;
        elements.slogan.value = template.slogan;
        elements.fontFamily.value = template.fontFamily;
        elements.fontSize.value = template.fontSize;
        elements.fontSizeValue.textContent = template.fontSize;
        elements.fontWeight.value = template.fontWeight;

        elements.textColor.value = template.textColor;
        elements.textColorHex.value = template.textColor;
        elements.iconColor.value = template.iconColor;
        elements.iconColorHex.value = template.iconColor;
        elements.bgColor.value = template.bgColor;
        elements.bgColorHex.value = template.bgColor;

        elements.iconPosition.value = template.iconPosition;
        elements.iconSize.value = template.iconSize;
        elements.iconSizeValue.textContent = template.iconSize;

        elements.spacing.value = template.spacing;
        elements.spacingValue.textContent = template.spacing;
        elements.padding.value = template.padding;
        elements.paddingValue.textContent = template.padding;
        elements.borderRadius.value = template.borderRadius;
        elements.borderRadiusValue.textContent = template.borderRadius;

        // Update icon
        currentIcon = template.icon;

        // Re-render icon grid to show active state
        renderIconGrid();

        // Update preview
        updatePreview();

        // Scroll to generator section
        document.getElementById('generator').scrollIntoView({ behavior: 'smooth' });
    }

    // Setup event listeners
    function setupEventListeners() {
        // Text inputs
        elements.brandName.addEventListener('input', updatePreview);
        elements.slogan.addEventListener('input', updatePreview);
        elements.fontFamily.addEventListener('change', updatePreview);
        elements.fontWeight.addEventListener('change', updatePreview);

        // Font size slider
        elements.fontSize.addEventListener('input', function() {
            elements.fontSizeValue.textContent = this.value;
            updatePreview();
        });

        // Color inputs - sync color picker and hex input
        setupColorSync(elements.textColor, elements.textColorHex);
        setupColorSync(elements.iconColor, elements.iconColorHex);
        setupColorSync(elements.bgColor, elements.bgColorHex);

        // Color presets
        document.querySelectorAll('.color-preset').forEach(preset => {
            preset.addEventListener('click', function() {
                const textColor = this.dataset.text;
                const iconColor = this.dataset.icon;
                const bgColor = this.dataset.bg;

                elements.textColor.value = textColor;
                elements.textColorHex.value = textColor;
                elements.iconColor.value = iconColor;
                elements.iconColorHex.value = iconColor;
                elements.bgColor.value = bgColor;
                elements.bgColorHex.value = bgColor;

                updatePreview();
            });
        });

        // Icon settings
        elements.iconPosition.addEventListener('change', updatePreview);
        elements.iconSize.addEventListener('input', function() {
            elements.iconSizeValue.textContent = this.value;
            updatePreview();
        });

        // Layout settings
        elements.spacing.addEventListener('input', function() {
            elements.spacingValue.textContent = this.value;
            updatePreview();
        });

        elements.padding.addEventListener('input', function() {
            elements.paddingValue.textContent = this.value;
            updatePreview();
        });

        elements.borderRadius.addEventListener('input', function() {
            elements.borderRadiusValue.textContent = this.value;
            updatePreview();
        });

        // Reset button
        elements.resetBtn.addEventListener('click', resetToDefaults);

        // Download buttons
        elements.downloadPng.addEventListener('click', () => downloadLogo(1));
        elements.downloadPngLarge.addEventListener('click', () => downloadLogo(2));
    }

    // Setup color input sync
    function setupColorSync(colorInput, hexInput) {
        colorInput.addEventListener('input', function() {
            hexInput.value = this.value.toUpperCase();
            updatePreview();
        });

        hexInput.addEventListener('input', function() {
            let value = this.value;
            if (!value.startsWith('#')) {
                value = '#' + value;
            }
            if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
                colorInput.value = value;
                updatePreview();
            }
        });

        hexInput.addEventListener('blur', function() {
            this.value = colorInput.value.toUpperCase();
        });
    }

    // Update preview
    function updatePreview() {
        const brandName = elements.brandName.value || defaults.brandName;
        const slogan = elements.slogan.value;
        const fontFamily = elements.fontFamily.value;
        const fontSize = elements.fontSize.value;
        const fontWeight = elements.fontWeight.value;
        const textColor = elements.textColor.value;
        const iconColor = elements.iconColor.value;
        const bgColor = elements.bgColor.value;
        const iconPosition = elements.iconPosition.value;
        const iconSize = elements.iconSize.value;
        const spacing = elements.spacing.value;
        const padding = elements.padding.value;
        const borderRadius = elements.borderRadius.value;

        // Update preview box
        elements.previewBox.style.backgroundColor = bgColor;
        elements.previewBox.style.padding = padding + 'px';
        elements.previewBox.style.borderRadius = borderRadius + 'px';

        // Update logo content layout
        elements.logoContent.className = 'logo-content';
        if (iconPosition === 'top') {
            elements.logoContent.classList.add('layout-top');
        } else if (iconPosition === 'right') {
            elements.logoContent.classList.add('layout-right');
        }
        elements.logoContent.style.gap = spacing + 'px';

        // Update icon
        if (iconPosition === 'none') {
            elements.logoIcon.style.display = 'none';
        } else {
            elements.logoIcon.style.display = 'block';
            elements.logoIcon.className = currentIcon + ' logo-icon';
            elements.logoIcon.style.fontSize = iconSize + 'px';
            elements.logoIcon.style.color = iconColor;
        }

        // Update brand name
        elements.brandNamePreview.textContent = brandName;
        elements.brandNamePreview.style.fontFamily = fontFamily;
        elements.brandNamePreview.style.fontSize = fontSize + 'px';
        elements.brandNamePreview.style.fontWeight = fontWeight;
        elements.brandNamePreview.style.color = textColor;

        // Update slogan
        if (slogan) {
            elements.sloganPreview.textContent = slogan;
            elements.sloganPreview.style.display = 'block';
            elements.sloganPreview.style.color = textColor;
            elements.sloganPreview.style.fontFamily = fontFamily;
            elements.sloganPreview.style.opacity = '0.7';
        } else {
            elements.sloganPreview.style.display = 'none';
        }
    }

    // Reset to defaults
    function resetToDefaults() {
        elements.brandName.value = defaults.brandName;
        elements.slogan.value = defaults.slogan;
        elements.fontFamily.value = defaults.fontFamily;
        elements.fontSize.value = defaults.fontSize;
        elements.fontSizeValue.textContent = defaults.fontSize;
        elements.fontWeight.value = defaults.fontWeight;

        elements.textColor.value = defaults.textColor;
        elements.textColorHex.value = defaults.textColor;
        elements.iconColor.value = defaults.iconColor;
        elements.iconColorHex.value = defaults.iconColor;
        elements.bgColor.value = defaults.bgColor;
        elements.bgColorHex.value = defaults.bgColor;

        elements.iconPosition.value = defaults.iconPosition;
        elements.iconSize.value = defaults.iconSize;
        elements.iconSizeValue.textContent = defaults.iconSize;

        elements.spacing.value = defaults.spacing;
        elements.spacingValue.textContent = defaults.spacing;
        elements.padding.value = defaults.padding;
        elements.paddingValue.textContent = defaults.padding;
        elements.borderRadius.value = defaults.borderRadius;
        elements.borderRadiusValue.textContent = defaults.borderRadius;

        currentIcon = defaults.icon;
        renderIconGrid();
        updatePreview();
    }

    // Download logo as PNG
    function downloadLogo(scale) {
        const previewBox = elements.previewBox;

        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Get computed styles
        const computedStyle = window.getComputedStyle(previewBox);
        const bgColor = elements.bgColor.value;
        const textColor = elements.textColor.value;
        const iconColor = elements.iconColor.value;
        const fontFamily = elements.fontFamily.value;
        const fontSize = parseInt(elements.fontSize.value) * scale;
        const fontWeight = elements.fontWeight.value;
        const iconSize = parseInt(elements.iconSize.value) * scale;
        const spacing = parseInt(elements.spacing.value) * scale;
        const padding = parseInt(elements.padding.value) * scale;
        const borderRadius = parseInt(elements.borderRadius.value) * scale;
        const iconPosition = elements.iconPosition.value;

        const brandName = elements.brandName.value || defaults.brandName;
        const slogan = elements.slogan.value;

        // Measure text
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        const brandNameWidth = ctx.measureText(brandName).width;

        let sloganWidth = 0;
        const sloganFontSize = Math.floor(fontSize * 0.3);
        if (slogan) {
            ctx.font = `400 ${sloganFontSize}px ${fontFamily}`;
            sloganWidth = ctx.measureText(slogan).width;
        }

        const textWidth = Math.max(brandNameWidth, sloganWidth);
        const textHeight = fontSize + (slogan ? sloganFontSize + 8 * scale : 0);

        // Calculate canvas dimensions based on layout
        let canvasWidth, canvasHeight;

        if (iconPosition === 'none') {
            canvasWidth = textWidth + padding * 2;
            canvasHeight = textHeight + padding * 2;
        } else if (iconPosition === 'top') {
            canvasWidth = Math.max(iconSize, textWidth) + padding * 2;
            canvasHeight = iconSize + spacing + textHeight + padding * 2;
        } else {
            canvasWidth = iconSize + spacing + textWidth + padding * 2;
            canvasHeight = Math.max(iconSize, textHeight) + padding * 2;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Draw background with rounded corners
        ctx.fillStyle = bgColor;
        if (borderRadius > 0) {
            roundRect(ctx, 0, 0, canvasWidth, canvasHeight, borderRadius);
            ctx.fill();
        } else {
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        // Calculate positions
        let iconX, iconY, textX, textY;

        if (iconPosition === 'none') {
            textX = padding;
            textY = padding + fontSize * 0.85;
        } else if (iconPosition === 'top') {
            iconX = (canvasWidth - iconSize) / 2;
            iconY = padding;
            textX = (canvasWidth - textWidth) / 2;
            textY = padding + iconSize + spacing + fontSize * 0.85;
        } else if (iconPosition === 'right') {
            textX = padding;
            textY = (canvasHeight - textHeight) / 2 + fontSize * 0.85;
            iconX = padding + textWidth + spacing;
            iconY = (canvasHeight - iconSize) / 2;
        } else {
            // left
            iconX = padding;
            iconY = (canvasHeight - iconSize) / 2;
            textX = padding + iconSize + spacing;
            textY = (canvasHeight - textHeight) / 2 + fontSize * 0.85;
        }

        // Draw icon (using Font Awesome as text)
        if (iconPosition !== 'none') {
            const iconUnicode = getIconUnicode(currentIcon);
            ctx.fillStyle = iconColor;
            ctx.font = `900 ${iconSize}px "Font Awesome 6 Free"`;
            ctx.textBaseline = 'top';

            // Center the icon
            const iconMetrics = ctx.measureText(iconUnicode);
            const iconDrawX = iconX + (iconSize - iconMetrics.width) / 2;
            ctx.fillText(iconUnicode, iconDrawX, iconY);
        }

        // Draw brand name
        ctx.fillStyle = textColor;
        ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
        ctx.textBaseline = 'alphabetic';
        ctx.fillText(brandName, textX, textY);

        // Draw slogan
        if (slogan) {
            ctx.fillStyle = textColor;
            ctx.globalAlpha = 0.7;
            ctx.font = `400 ${sloganFontSize}px ${fontFamily}`;
            ctx.fillText(slogan, textX, textY + sloganFontSize + 8 * scale);
            ctx.globalAlpha = 1;
        }

        // Download
        const link = document.createElement('a');
        link.download = `logo-${brandName.replace(/\s+/g, '-').toLowerCase()}${scale > 1 ? '-2x' : ''}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    }

    // Helper: Draw rounded rectangle
    function roundRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }

    // Helper: Get Font Awesome icon unicode
    function getIconUnicode(iconClass) {
        const iconMap = {
            // Business & Finance
            'fas fa-briefcase': '\uf0b1',
            'fas fa-building': '\uf1ad',
            'fas fa-chart-line': '\uf201',
            'fas fa-coins': '\uf51e',
            'fas fa-handshake': '\uf2b5',
            'fas fa-landmark': '\uf66f',
            'fas fa-piggy-bank': '\uf4d3',
            'fas fa-wallet': '\uf555',

            // Technology
            'fas fa-laptop': '\uf109',
            'fas fa-mobile-alt': '\uf3cd',
            'fas fa-desktop': '\uf108',
            'fas fa-code': '\uf121',
            'fas fa-database': '\uf1c0',
            'fas fa-server': '\uf233',
            'fas fa-microchip': '\uf2db',
            'fas fa-robot': '\uf544',
            'fas fa-wifi': '\uf1eb',
            'fas fa-cloud': '\uf0c2',

            // Creative & Design
            'fas fa-palette': '\uf53f',
            'fas fa-paint-brush': '\uf1fc',
            'fas fa-pen-fancy': '\uf5ac',
            'fas fa-camera': '\uf030',
            'fas fa-film': '\uf008',
            'fas fa-music': '\uf001',
            'fas fa-headphones': '\uf025',
            'fas fa-video': '\uf03d',

            // Nature & Environment
            'fas fa-leaf': '\uf06c',
            'fas fa-tree': '\uf1bb',
            'fas fa-seedling': '\uf4d8',
            'fas fa-sun': '\uf185',
            'fas fa-moon': '\uf186',
            'fas fa-star': '\uf005',
            'fas fa-water': '\uf773',
            'fas fa-mountain': '\uf6fc',
            'fas fa-globe': '\uf0ac',
            'fas fa-globe-asia': '\uf57e',

            // Food & Drink
            'fas fa-coffee': '\uf0f4',
            'fas fa-utensils': '\uf2e7',
            'fas fa-pizza-slice': '\uf818',
            'fas fa-ice-cream': '\uf810',
            'fas fa-birthday-cake': '\uf1fd',
            'fas fa-wine-glass': '\uf4e3',
            'fas fa-beer': '\uf0fc',
            'fas fa-apple-alt': '\uf5d1',

            // Health & Fitness
            'fas fa-heartbeat': '\uf21e',
            'fas fa-dumbbell': '\uf44b',
            'fas fa-running': '\uf70c',
            'fas fa-medkit': '\uf0fa',
            'fas fa-stethoscope': '\uf0f1',
            'fas fa-pills': '\uf484',

            // Education
            'fas fa-graduation-cap': '\uf19d',
            'fas fa-book': '\uf02d',
            'fas fa-book-open': '\uf518',
            'fas fa-pencil-alt': '\uf303',
            'fas fa-chalkboard-teacher': '\uf51c',
            'fas fa-university': '\uf19c',
            'fas fa-atom': '\uf5d2',
            'fas fa-flask': '\uf0c3',

            // Transport
            'fas fa-car': '\uf1b9',
            'fas fa-plane': '\uf072',
            'fas fa-ship': '\uf21a',
            'fas fa-train': '\uf238',
            'fas fa-bicycle': '\uf206',
            'fas fa-motorcycle': '\uf21c',
            'fas fa-rocket': '\uf135',

            // Shopping & E-commerce
            'fas fa-shopping-cart': '\uf07a',
            'fas fa-shopping-bag': '\uf290',
            'fas fa-store': '\uf54e',
            'fas fa-tags': '\uf02c',
            'fas fa-gift': '\uf06b',
            'fas fa-percent': '\uf295',

            // Communication
            'fas fa-envelope': '\uf0e0',
            'fas fa-phone': '\uf095',
            'fas fa-comments': '\uf086',
            'fas fa-comment-dots': '\uf4ad',
            'fas fa-bullhorn': '\uf0a1',
            'fas fa-bell': '\uf0f3',

            // Security
            'fas fa-shield-alt': '\uf3ed',
            'fas fa-lock': '\uf023',
            'fas fa-key': '\uf084',
            'fas fa-fingerprint': '\uf577',
            'fas fa-user-shield': '\uf505',

            // Shapes & Symbols
            'fas fa-circle': '\uf111',
            'fas fa-square': '\uf0c8',
            'fas fa-heart': '\uf004',
            'fas fa-bolt': '\uf0e7',
            'fas fa-fire': '\uf06d',
            'fas fa-gem': '\uf3a5',
            'fas fa-crown': '\uf521',
            'fas fa-trophy': '\uf091',
            'fas fa-medal': '\uf5a2',
            'fas fa-infinity': '\uf534',

            // Animals
            'fas fa-paw': '\uf1b0',
            'fas fa-dog': '\uf6d3',
            'fas fa-cat': '\uf6be',
            'fas fa-horse': '\uf6f0',
            'fas fa-fish': '\uf578',
            'fas fa-dove': '\uf4ba',
            'fas fa-dragon': '\uf6d5',
            'fas fa-spider': '\uf717',

            // Home & Living
            'fas fa-home': '\uf015',
            'fas fa-couch': '\uf4b8',
            'fas fa-bed': '\uf236',
            'fas fa-bath': '\uf2cd',
            'fas fa-lightbulb': '\uf0eb',
            'fas fa-plug': '\uf1e6',

            // Social & People
            'fas fa-users': '\uf0c0',
            'fas fa-user-tie': '\uf508',
            'fas fa-user-graduate': '\uf501',
            'fas fa-hands-helping': '\uf4c4',
            'fas fa-hand-holding-heart': '\uf4be',

            // Abstract & Modern
            'fas fa-cube': '\uf1b2',
            'fas fa-cubes': '\uf1b3',
            'fas fa-layer-group': '\uf5fd',
            'fas fa-vector-square': '\uf5cb',
            'fas fa-bezier-curve': '\uf55b',
            'fas fa-drafting-compass': '\uf568',
            'fas fa-ruler-combined': '\uf546',
            'fas fa-cogs': '\uf085',
            'fas fa-cog': '\uf013',
            'fas fa-wrench': '\uf0ad',
            'fas fa-hammer': '\uf6e3',
            'fas fa-magic': '\uf0d0',
            'fas fa-wand-magic-sparkles': '\ue2ca',
            'fas fa-sparkles': '\uf890',
            'fas fa-feather-alt': '\uf56b',
            'fas fa-anchor': '\uf13d',
            'fas fa-compass': '\uf14e',
            'fas fa-map-marker-alt': '\uf3c5',
            'fas fa-crosshairs': '\uf05b',
            'fas fa-bullseye': '\uf140',
            'fas fa-adjust': '\uf042',
            'fas fa-balance-scale': '\uf24e',
            'fas fa-chart-pie': '\uf200',
            'fas fa-signal': '\uf012',
            'fas fa-sync-alt': '\uf2f1',
            'fas fa-exchange-alt': '\uf362',
            'fas fa-link': '\uf0c1',
            'fas fa-unlink': '\uf127',
            'fas fa-expand': '\uf065',
            'fas fa-compress': '\uf066',
            'fas fa-arrows-alt': '\uf0b2',
            'fas fa-redo': '\uf01e',
            'fas fa-check': '\uf00c',
            'fas fa-check-circle': '\uf058',
            'fas fa-plus': '\uf067',
            'fas fa-minus': '\uf068',
            'fas fa-times': '\uf00d',
            'fas fa-hashtag': '\uf292',
            'fas fa-at': '\uf1fa'
        };

        return iconMap[iconClass] || '\uf005'; // Default to star
    }

    // Initialize
    init();
});
