// دليل فعاليات المدينة - الملف الرئيسي للجافاسكريبت

// بيانات الفعاليات التجريبية
const eventsData = [
    {
        id: 1,
        title: "مهرجان دمشق الثقافي السنوي",
        category: "ثقافة",
        date: "2025-03-15",
        time: "19:00",
        location: "دار الأوبرا السورية، دمشق",
        price: "1000 ل.س",
        description: "مهرجان ثقافي يضم عروض موسيقية وفنية متنوعة من التراث السوري",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        featured: true,
        phone: "+963-11-2234567"
    },
    {
        id: 2,
        title: "بطولة دمشق لكرة القدم",
        category: "رياضة",
        date: "2025-03-20",
        time: "16:00",
        location: "ملعب تشرين، دمشق",
        price: "500 ل.س",
        description: "بطولة محلية لأندية العاصمة مع مشاركة واسعة من الجماهير",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
        featured: true,
        phone: "+963-11-3345678"
    },
    {
        id: 3,
        title: "أمسية موسيقية مع فرقة بلدي",
        category: "موسيقى",
        date: "2025-03-22",
        time: "20:30",
        location: "مسرح القباني، دمشق القديمة",
        price: "1500 ل.س",
        description: "أمسية موسيقية تراثية مع أشهر الألحان السورية والعربية",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        featured: true,
        phone: "+963-11-4456789"
    },
    {
        id: 4,
        title: "يوم عائلي في حديقة تشرين",
        category: "عائلي",
        date: "2025-03-25",
        time: "10:00",
        location: "حديقة تشرين، دمشق",
        price: "مجاني",
        description: "يوم ترفيهي للعائلات مع أنشطة للأطفال وعروض فنية",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        featured: false,
        phone: "+963-11-5567890"
    },
    {
        id: 5,
        title: "معرض الكتاب السوري",
        category: "ثقافة",
        date: "2025-03-28",
        time: "09:00",
        location: "معرض دمشق الدولي",
        price: "200 ل.س",
        description: "معرض سنوي يضم أحدث الإصدارات من دور النشر السورية والعربية",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop",
        featured: true,
        phone: "+963-11-6678901"
    },
    {
        id: 6,
        title: "حفل موسيقى الجاز",
        category: "موسيقى",
        date: "2025-04-02",
        time: "21:00",
        location: "مركز المؤتمرات، دمشق",
        price: "2000 ل.س",
        description: "أمسية موسيقى جاز مع عازفين محليين وعرب",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        featured: false,
        phone: "+963-11-7789012"
    },
    {
        id: 7,
        title: "مسرحية تراثية سورية",
        category: "ثقافة",
        date: "2025-04-08",
        time: "20:00",
        location: "المسرح الوطني، دمشق",
        price: "800 ل.س",
        description: "عرض مسرحي يستعرض التراث السوري الأصيل مع أداء متميز",
        image: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=800&h=600&fit=crop",
        featured: true,
        phone: "+963-11-8890123"
    },
    {
        id: 8,
        title: "دوري كرة السلة الدمشقي",
        category: "رياضة",
        date: "2025-04-12",
        time: "18:30",
        location: "صالة الشعب الرياضية، دمشق",
        price: "600 ل.س",
        description: "مباراة نهائي دوري كرة السلة لأندية دمشق مع جوائز قيمة",
        image: "https://images.unsplash.com/photo-1546519638-68e109498573?w=800&h=600&fit=crop",
        featured: false,
        phone: "+963-11-9901234"
    },
    {
        id: 9,
        title: "حفل الموسيقى الشرقية",
        category: "موسيقى",
        date: "2025-04-18",
        time: "21:30",
        location: "قاعة الأسد للثقافة والفنون، دمشق",
        price: "1800 ل.س",
        description: "أمسية موسيقية شرقية مع أشهر الفنانين السوريين والعرب",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        featured: false,
        phone: "+963-11-1012345"
    },
    {
        id: 10,
        title: "مهرجان الطفولة والأسرة",
        category: "عائلي",
        date: "2025-04-25",
        time: "11:00",
        location: "حديقة الجلاء، دمشق",
        price: "300 ل.س",
        description: "مهرجان عائلي شامل مع أنشطة للأطفال وعروض ترفيهية متنوعة",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
        featured: false,
        phone: "+963-11-1123456"
    }
];

// متغيرات عامة
let currentSlide = 0;
let filteredEvents = [...eventsData];
let currentCategory = 'الكل';

// تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // تحديد الصفحة الحالية
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('index.html') || currentPage === '/' || currentPage === '') {
        initializeHomePage();
    } else if (currentPage.includes('events.html')) {
        initializeEventsPage();
    } else if (currentPage.includes('event.html')) {
        initializeEventDetailPage();
    } else if (currentPage.includes('contact.html')) {
        initializeContactPage();
    }
    
    // تفعيل الأنيميشن للعناصر
    initializeAnimations();
}

// الصفحة الرئيسية
function initializeHomePage() {
    displayFeaturedEvents();
    displayLatestEvents();
    initializeSlider();
    initializeCategoryFilters();
}

// عرض الفعاليات البارزة في السلايدر
function displayFeaturedEvents() {
    const featuredEvents = eventsData.filter(event => event.featured);
    const sliderContainer = document.querySelector('.slider-container');
    
    if (sliderContainer) {
        sliderContainer.innerHTML = featuredEvents.map(event => `
            <div class="slider-item">
                <div class="card event-card">
                    <div class="position-relative">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <span class="badge bg-primary event-badge">${event.category}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="text-muted mb-2">
                            <i class="fas fa-calendar-alt me-2"></i>${formatDate(event.date)} - ${event.time}
                        </p>
                        <p class="text-muted mb-2">
                            <i class="fas fa-map-marker-alt me-2"></i>${event.location}
                        </p>
                        <p class="text-success mb-3">
                            <i class="fas fa-tag me-2"></i>${event.price}
                        </p>
                        <p class="card-text">${event.description}</p>
                        <a href="event.html?id=${event.id}" class="btn btn-primary">التفاصيل</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// عرض أحدث الفعاليات
function displayLatestEvents() {
    const latestEventsContainer = document.getElementById('latest-events');
    if (latestEventsContainer) {
        const latestEvents = eventsData.slice(0, 6);
        latestEventsContainer.innerHTML = latestEvents.map(event => `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card event-card">
                    <div class="position-relative">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                        <span class="badge bg-primary event-badge">${event.category}</span>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${event.title}</h5>
                        <p class="text-muted mb-2">
                            <i class="fas fa-calendar-alt me-2"></i>${formatDate(event.date)} - ${event.time}
                        </p>
                        <p class="text-muted mb-2">
                            <i class="fas fa-map-marker-alt me-2"></i>${event.location}
                        </p>
                        <p class="text-success mb-3">
                            <i class="fas fa-tag me-2"></i>${event.price}
                        </p>
                        <p class="card-text">${event.description.substring(0, 100)}...</p>
                        <a href="event.html?id=${event.id}" class="btn btn-primary">التفاصيل</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// السلايدر
function initializeSlider() {
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(1));
        
        // السلايدر التلقائي
        setInterval(() => {
            changeSlide(1);
        }, 5000);
    }
}

function changeSlide(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slider-item');
    
    if (!sliderContainer || slides.length === 0) return;
    
    currentSlide += direction;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    const translateX = -currentSlide * 100;
    sliderContainer.style.transform = `translateX(${translateX}%)`;
}

// فلاتر التصنيفات
function initializeCategoryFilters() {
    const categoryBadges = document.querySelectorAll('.category-badge');
    categoryBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            const category = this.dataset.category;
            filterEventsByCategory(category);
            updateActiveBadge(this);
        });
    });
}

function filterEventsByCategory(category) {
    currentCategory = category;
    
    if (category === 'الكل') {
        filteredEvents = [...eventsData];
    } else {
        filteredEvents = eventsData.filter(event => event.category === category);
    }
    
    // تحديث العرض حسب الصفحة
    const currentPage = window.location.pathname;
    if (currentPage.includes('events.html')) {
        displayEvents(filteredEvents);
    } else {
        displayLatestEvents();
    }
}

function updateActiveBadge(activeBadge) {
    document.querySelectorAll('.category-badge').forEach(badge => {
        badge.classList.remove('active');
    });
    activeBadge.classList.add('active');
}

// صفحة الفعاليات
function initializeEventsPage() {
    displayEvents(eventsData);
    initializeSearchAndFilter();
    initializeCategoryFilters();
}

function displayEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;
    
    if (events.length === 0) {
        eventsContainer.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-info">
                    <i class="fas fa-info-circle me-2"></i>
                    لا توجد فعاليات متاحة حالياً
                </div>
            </div>
        `;
        return;
    }
    
    eventsContainer.innerHTML = events.map(event => `
        <div class="col-lg-6 col-xl-4 mb-4">
            <div class="card event-card">
                <div class="position-relative">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    <span class="badge bg-primary event-badge">${event.category}</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${event.title}</h5>
                    <p class="text-muted mb-2">
                        <i class="fas fa-calendar-alt me-2"></i>${formatDate(event.date)} - ${event.time}
                    </p>
                    <p class="text-muted mb-2">
                        <i class="fas fa-map-marker-alt me-2"></i>${event.location}
                    </p>
                    <p class="text-success mb-3">
                        <i class="fas fa-tag me-2"></i>${event.price}
                    </p>
                    <p class="card-text">${event.description.substring(0, 120)}...</p>
                    <a href="event.html?id=${event.id}" class="btn btn-primary">عرض التفاصيل</a>
                </div>
            </div>
        </div>
    `).join('');
}

// البحث والفلترة
function initializeSearchAndFilter() {
    const searchInput = document.getElementById('search-input');
    const dateFilter = document.getElementById('date-filter');
    const locationFilter = document.getElementById('location-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    if (dateFilter) {
        dateFilter.addEventListener('change', handleDateFilter);
    }
    
    if (locationFilter) {
        locationFilter.addEventListener('change', handleLocationFilter);
    }
}

function handleSearch() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    let filtered = eventsData.filter(event => 
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.location.toLowerCase().includes(searchTerm)
    );
    
    // تطبيق فلاتر أخرى
    filtered = applyAllFilters(filtered);
    displayEvents(filtered);
}

function handleDateFilter() {
    const selectedDate = document.getElementById('date-filter').value;
    let filtered = eventsData;
    
    if (selectedDate) {
        filtered = eventsData.filter(event => event.date === selectedDate);
    }
    
    filtered = applyAllFilters(filtered);
    displayEvents(filtered);
}

function handleLocationFilter() {
    const selectedLocation = document.getElementById('location-filter').value;
    let filtered = eventsData;
    
    if (selectedLocation && selectedLocation !== 'الكل') {
        filtered = eventsData.filter(event => event.location.includes(selectedLocation));
    }
    
    filtered = applyAllFilters(filtered);
    displayEvents(filtered);
}

function applyAllFilters(events) {
    let filtered = events;
    
    // فلتر التصنيف
    if (currentCategory !== 'الكل') {
        filtered = filtered.filter(event => event.category === currentCategory);
    }
    
    // فلتر البحث
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(event => 
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
    }
    
    return filtered;
}

// صفحة تفاصيل الفعالية
function initializeEventDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = parseInt(urlParams.get('id'));
    
    if (eventId) {
        displayEventDetails(eventId);
        displayRelatedEvents(eventId);
    }
}

function displayEventDetails(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    // تحديث العنوان
    document.title = `${event.title} - دليل فعاليات دمشق`;
    
    // تحديث محتوى الصفحة
    const eventHeader = document.querySelector('.event-detail-header');
    if (eventHeader) {
        eventHeader.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <span class="badge bg-primary mb-3 fs-6">${event.category}</span>
                        <h1 class="display-4 mb-3">${event.title}</h1>
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <p class="fs-5">
                                    <i class="fas fa-calendar-alt me-2"></i>${formatDate(event.date)} - ${event.time}
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p class="fs-5">
                                    <i class="fas fa-map-marker-alt me-2"></i>${event.location}
                                </p>
                            </div>
                        </div>
                        <p class="fs-4 text-warning">
                            <i class="fas fa-tag me-2"></i>${event.price}
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    
    const eventContent = document.getElementById('event-content');
    if (eventContent) {
        eventContent.innerHTML = `
            <div class="row">
                <div class="col-lg-8">
                    <div class="card mb-4">
                        <img src="${event.image}" class="card-img-top" alt="${event.title}">
                    </div>
                    
                    <div class="card mb-4">
                        <div class="card-body">
                            <h3>وصف الفعالية</h3>
                            <p class="lead">${event.description}</p>
                            <p>انضم إلينا في هذه الفعالية الرائعة واستمتع بتجربة لا تُنسى في قلب العاصمة دمشق.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5>معلومات الحجز</h5>
                            <hr>
                            <p><strong>السعر:</strong> ${event.price}</p>
                            <p><strong>التاريخ:</strong> ${formatDate(event.date)}</p>
                            <p><strong>الوقت:</strong> ${event.time}</p>
                            <p><strong>المكان:</strong> ${event.location}</p>
                            <p><strong>الهاتف:</strong> ${event.phone}</p>
                            <hr>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary btn-lg" onclick="addToCalendar(${event.id})">
                                    <i class="fas fa-calendar-plus me-2"></i>أضف للتقويم
                                </button>
                                <button class="btn btn-outline-primary" onclick="shareEvent(${event.id})">
                                    <i class="fas fa-share-alt me-2"></i>شارك الفعالية
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-body">
                            <h5>خريطة الموقع</h5>
                            <div class="bg-light rounded p-4 text-center">
                                <i class="fas fa-map-marked-alt fa-3x text-muted mb-3"></i>
                                <p class="text-muted">خريطة تفاعلية للموقع</p>
                                <small class="text-muted">${event.location}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

function displayRelatedEvents(currentEventId) {
    const currentEvent = eventsData.find(e => e.id === currentEventId);
    const relatedEvents = eventsData
        .filter(event => event.id !== currentEventId && event.category === currentEvent.category)
        .slice(0, 3);
    
    const relatedContainer = document.getElementById('related-events');
    if (relatedContainer && relatedEvents.length > 0) {
        relatedContainer.innerHTML = `
            <h3 class="mb-4">فعاليات ذات صلة</h3>
            <div class="row">
                ${relatedEvents.map(event => `
                    <div class="col-md-4 mb-3">
                        <div class="card event-card">
                            <img src="${event.image}" class="card-img-top" alt="${event.title}">
                            <div class="card-body">
                                <h6 class="card-title">${event.title}</h6>
                                <p class="text-muted small mb-2">${formatDate(event.date)}</p>
                                <a href="event.html?id=${event.id}" class="btn btn-sm btn-outline-primary">التفاصيل</a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// صفحة التواصل
function initializeContactPage() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // التحقق من صحة البيانات
    if (!validateContactForm(name, email, message)) {
        return;
    }
    
    // محاكاة إرسال النموذج
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<span class="loading"></span> جاري الإرسال...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        showAlert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.', 'success');
        event.target.reset();
    }, 2000);
}

function validateContactForm(name, email, message) {
    // التحقق من الاسم
    if (!name || name.trim().length < 2) {
        showAlert('يرجى إدخال اسم صحيح', 'danger');
        return false;
    }
    
    // التحقق من البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showAlert('يرجى إدخال بريد إلكتروني صحيح', 'danger');
        return false;
    }
    
    // التحقق من الرسالة
    if (!message || message.trim().length < 10) {
        showAlert('يرجى إدخال رسالة من 10 أحرف على الأقل', 'danger');
        return false;
    }
    
    return true;
}

// وظائف مساعدة
function formatDate(dateString) {
    const date = new Date(dateString);
    const months = [
        'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
        'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
    ];
    
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container') || createAlertContainer();
    
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type} alert-dismissible fade show`;
    alertElement.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    alertContainer.appendChild(alertElement);
    
    // إزالة التنبيه تلقائياً بعد 5 ثواني
    setTimeout(() => {
        alertElement.remove();
    }, 5000);
}

function createAlertContainer() {
    const container = document.createElement('div');
    container.id = 'alert-container';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.left = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    document.body.appendChild(container);
    return container;
}

function addToCalendar(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    showAlert('تم إضافة الفعالية إلى التقويم بنجاح!', 'success');
}

function shareEvent(eventId) {
    const event = eventsData.find(e => e.id === eventId);
    if (!event) return;
    
    if (navigator.share) {
        navigator.share({
            title: event.title,
            text: event.description,
            url: window.location.href
        });
    } else {
        // نسخ الرابط للحافظة
        navigator.clipboard.writeText(window.location.href);
        showAlert('تم نسخ رابط الفعالية للحافظة!', 'info');
    }
}

// الأنيميشن
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // تطبيق الأنيميشن على العناصر
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    // إضافة كلاس الأنيميشن للكروت
    document.querySelectorAll('.event-card').forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
}