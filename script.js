// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('journalModal');
const addJournalBtn = document.getElementById('addJournalBtn');
const closeModal = document.querySelector('.close');
const cancelEntry = document.getElementById('cancelEntry');
const journalForm = document.getElementById('journalForm');
const journalGrid = document.getElementById('journalGrid');
const categoryFilter = document.getElementById('categoryFilter');

// Sample journal entries data
let journalEntries = [
    {
        id: 1,
        title: "My First React Project",
        category: "tech",
        content: "Today I completed my first React project! It was challenging but incredibly rewarding. I learned so much about component-based architecture and state management. The feeling of seeing everything work together is amazing.",
        mood: "excited",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Morning Coffee Thoughts",
        category: "life",
        content: "Sitting here with my morning coffee, thinking about how far I've come in my coding journey. It's amazing how much you can learn when you're passionate about something. Every day brings new challenges and opportunities to grow.",
        mood: "thoughtful",
        date: "2024-01-14"
    },
    {
        id: 3,
        title: "Learning TypeScript",
        category: "learning",
        content: "Started learning TypeScript today. The type system is fascinating and I can already see how it will help prevent bugs in larger projects. The learning curve is steep but worth it for better code quality.",
        mood: "inspired",
        date: "2024-01-13"
    },
    {
        id: 4,
        title: "Weekend Trip to the Mountains",
        category: "travel",
        content: "Spent the weekend hiking in the mountains. The fresh air and beautiful scenery were exactly what I needed to clear my mind. Sometimes stepping away from the computer is the best way to solve coding problems.",
        mood: "peaceful",
        date: "2024-01-12"
    }
];

// Navigation functionality
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal functionality
addJournalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', closeModalFunction);
cancelEntry.addEventListener('click', closeModalFunction);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunction();
    }
});

function closeModalFunction() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    journalForm.reset();
}

// Journal form submission
journalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(journalForm);
    const newEntry = {
        id: Date.now(),
        title: formData.get('title'),
        category: formData.get('category'),
        content: formData.get('content'),
        mood: formData.get('mood'),
        date: new Date().toISOString().split('T')[0]
    };
    
    journalEntries.unshift(newEntry);
    renderJournalEntries();
    closeModalFunction();
    
    // Show success message
    showNotification('Journal entry added successfully!', 'success');
});

// Filter journal entries
categoryFilter.addEventListener('change', () => {
    renderJournalEntries();
});

// Render journal entries
function renderJournalEntries() {
    const selectedCategory = categoryFilter.value;
    const filteredEntries = selectedCategory === 'all' 
        ? journalEntries 
        : journalEntries.filter(entry => entry.category === selectedCategory);
    
    journalGrid.innerHTML = '';
    
    if (filteredEntries.length === 0) {
        journalGrid.innerHTML = `
            <div class="no-entries" style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <p style="color: #6b7280; font-size: 1.1rem;">No journal entries found.</p>
            </div>
        `;
        return;
    }
    
    filteredEntries.forEach(entry => {
        const entryElement = createJournalEntryElement(entry);
        journalGrid.appendChild(entryElement);
    });
}

// Create journal entry element
function createJournalEntryElement(entry) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'journal-entry fade-in';
    
    const moodEmojis = {
        happy: '😊',
        excited: '🤩',
        thoughtful: '🤔',
        inspired: '💡',
        challenged: '💪',
        peaceful: '😌'
    };
    
    entryDiv.innerHTML = `
        <div class="journal-entry-header">
            <div>
                <h3 class="journal-entry-title">${entry.title}</h3>
                <span class="journal-entry-date">${formatDate(entry.date)}</span>
            </div>
            <span class="journal-entry-mood">${moodEmojis[entry.mood] || '😊'}</span>
        </div>
        <span class="journal-entry-category ${entry.category}">${getCategoryName(entry.category)}</span>
        <p class="journal-entry-content">${entry.content}</p>
    `;
    
    // Add click event to show full entry
    entryDiv.addEventListener('click', () => {
        showFullEntry(entry);
    });
    
    return entryDiv;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get category name
function getCategoryName(category) {
    const categories = {
        tech: 'Technology',
        life: 'Life & Personal',
        learning: 'Learning',
        travel: 'Travel'
    };
    return categories[category] || category;
}

// Show full journal entry
function showFullEntry(entry) {
    const moodEmojis = {
        happy: '😊',
        excited: '🤩',
        thoughtful: '🤔',
        inspired: '💡',
        challenged: '💪',
        peaceful: '😌'
    };
    
    const fullEntryHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h3>${entry.title}</h3>
                <span class="close" onclick="this.closest('.modal').style.display='none'">&times;</span>
            </div>
            <div style="padding: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span class="journal-entry-category ${entry.category}">${getCategoryName(entry.category)}</span>
                    <span style="font-size: 2rem;">${moodEmojis[entry.mood] || '😊'}</span>
                </div>
                <p style="color: #6b7280; margin-bottom: 1.5rem;">${formatDate(entry.date)}</p>
                <div style="line-height: 1.8; color: #4b5563; white-space: pre-wrap;">${entry.content}</div>
            </div>
        </div>
    `;
    
    const fullEntryModal = document.createElement('div');
    fullEntryModal.className = 'modal';
    fullEntryModal.style.display = 'block';
    fullEntryModal.innerHTML = fullEntryHTML;
    
    document.body.appendChild(fullEntryModal);
    
    // Close modal when clicking outside
    fullEntryModal.addEventListener('click', (e) => {
        if (e.target === fullEntryModal) {
            fullEntryModal.remove();
        }
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 'background: #3b82f6;'}
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent!';
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Render initial journal entries
    renderJournalEntries();
    
    // Add scroll event listeners
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger initial animations
    animateOnScroll();
    
    // Animate skill bars when skills section is visible
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(skillsSection);
    }
});

// Add some sample data to localStorage if not exists
if (!localStorage.getItem('journalEntries')) {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
} else {
    journalEntries = JSON.parse(localStorage.getItem('journalEntries'));
}

// Save to localStorage when entries change
function saveToLocalStorage() {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}

// Update the form submission to save to localStorage
const originalFormSubmit = journalForm.addEventListener;
journalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(journalForm);
    const newEntry = {
        id: Date.now(),
        title: formData.get('title'),
        category: formData.get('category'),
        content: formData.get('content'),
        mood: formData.get('mood'),
        date: new Date().toISOString().split('T')[0]
    };
    
    journalEntries.unshift(newEntry);
    saveToLocalStorage();
    renderJournalEntries();
    closeModalFunction();
    
    showNotification('Journal entry added successfully!', 'success');
});
