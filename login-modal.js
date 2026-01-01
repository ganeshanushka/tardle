// Reusable Login Modal Component
// Usage: Call openLoginModal(returnUrl) to open the modal

(function() {
  'use strict';

  // Create modal HTML structure
  const modalHTML = `
    <div class="login-modal-overlay" id="loginModalOverlay">
      <div class="login-modal-container">
        <button class="login-modal-close" onclick="closeLoginModal()">×</button>
        <h1>Log in or create an account</h1>
        <form id="loginModalForm">
          <div class="login-modal-input-group">
            <label for="loginModalEmail">Email Address</label>
            <input type="email" id="loginModalEmail" name="email" required autocomplete="email">
          </div>
          <div class="login-modal-input-group">
            <input type="submit" id="loginModalContinueBtn" value="Continue">
          </div>
        </form>
        <p class="login-modal-terms">
          By continuing, you agree to the updated <a href="privacy-policy.html">Terms of Service</a>, 
          and <a href="privacy-policy.html">Privacy Policy</a>.
        </p>
      </div>
    </div>
  `;

  // Create modal CSS styles
  const modalStyles = `
    <style id="loginModalStyles">
      .login-modal-overlay {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #7BAFD4;
        z-index: 10000;
        justify-content: center;
        align-items: center;
      }
      
      .login-modal-overlay.active {
        display: flex;
      }
      
      .login-modal-container {
        background-color: white;
        margin: auto;
        padding: 32px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        width: 90%;
        max-width: 440px;
        border-radius: 8px;
        position: relative;
      }
      
      .login-modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: #000;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: sans-serif;
        line-height: 1;
      }
      
      .login-modal-close:hover {
        opacity: 0.7;
      }
      
      .login-modal-container h1 {
        font-size: 28px;
        font-weight: bold;
        margin: 0 0 24px 0;
        text-align: center;
        color: #000;
        font-family: 'PT Serif', serif;
      }
      
      .login-modal-input-group {
        font-size: 1.25em;
      }
      
      .login-modal-input-group label {
        text-align: left;
        display: block;
        font-weight: bold;
        margin-top: 0;
        margin-bottom: 0.7em;
        font-family: 'PT Serif', serif;
      }
      
      .login-modal-input-group input[type="email"] {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
      }
      
      .login-modal-input-group input[type="email"]:focus {
        outline: none;
        border-color: #000;
      }
      
      .login-modal-input-group input[type="submit"] {
        width: 100%;
        padding: 12px;
        background-color: #7BAFD4;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
        margin-bottom: 0;
      }
      
      .login-modal-input-group input[type="submit"]:hover {
        background-color: #6a9fc0;
      }
      
      .login-modal-input-group input[type="submit"]:disabled {
        background-color: #999;
        cursor: not-allowed;
      }
      
      .login-modal-terms {
        font-size: 12px;
        color: #666;
        margin-top: 24px;
        margin-bottom: 0;
        line-height: 1.5;
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
        text-align: center;
      }
      
      .login-modal-terms a {
        text-decoration: underline;
        color: #1a73e8;
      }
    </style>
  `;

  // Initialize modal - inject styles and HTML if not already present
  function initModal() {
    // Add styles if not already present
    if (!document.getElementById('loginModalStyles')) {
      document.head.insertAdjacentHTML('beforeend', modalStyles);
    }
    
    // Add modal HTML if not already present
    if (!document.getElementById('loginModalOverlay')) {
      document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
  }

  // Store return URL
  let currentReturnUrl = null;

  // Open modal function
  window.openLoginModal = function(returnUrl, prefillEmail) {
    initModal();
    currentReturnUrl = returnUrl || null;
    
    const overlay = document.getElementById('loginModalOverlay');
    const emailInput = document.getElementById('loginModalEmail');
    
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Pre-fill email if provided
      if (prefillEmail && emailInput) {
        emailInput.value = prefillEmail;
      }
      
      // Focus email input
      setTimeout(() => {
        if (emailInput) {
          emailInput.focus();
          if (prefillEmail) {
            try {
              emailInput.setSelectionRange(prefillEmail.length, prefillEmail.length);
            } catch (e) {
              // Email inputs don't support setSelectionRange - that's ok
            }
          }
        }
      }, 100);
    }
  };

  // Close modal function
  window.closeLoginModal = function() {
    const overlay = document.getElementById('loginModalOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      
      // Clear form
      const form = document.getElementById('loginModalForm');
      if (form) {
        form.reset();
      }
    }
  };

  // Handle form submission
  function setupFormHandler() {
    const form = document.getElementById('loginModalForm');
    if (!form) return;

    // Remove existing listeners by cloning the form
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('loginModalEmail');
      const continueBtn = document.getElementById('loginModalContinueBtn');
      
      if (!emailInput) return;
      
      const email = emailInput.value.trim();
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address');
        emailInput.focus();
        return;
      }
      
      // Disable submit button
      if (continueBtn) {
        continueBtn.disabled = true;
        continueBtn.value = 'Checking...';
      }
      
      // Check if email exists using the same logic as login.html
      try {
        // Wait for Firebase to be loaded
        await new Promise((resolve) => {
          if (window.firebaseAuthFunctions && window.firebaseAuth) {
            resolve();
          } else {
            const checkInterval = setInterval(() => {
              if (window.firebaseAuthFunctions && window.firebaseAuth) {
                clearInterval(checkInterval);
                resolve();
              }
            }, 100);
          }
        });
        
        let emailExists = false;
        
        try {
          const dummyPassword = 'DummyCheck123!@#';
          await window.firebaseAuthFunctions.createUserWithEmailAndPassword(window.firebaseAuth, email, dummyPassword);
          
          emailExists = false;
          console.log('✗ Account does NOT exist (created during check - will delete)');
          
          // Delete the account we just created
          const user = window.firebaseAuth.currentUser;
          if (user) {
            try {
              await user.delete();
              console.log('✓ Deleted accidentally created account');
            } catch (deleteError) {
              console.error('Failed to delete account:', deleteError);
            }
          }
        } catch (createError) {
          const errorCode = createError.code;
          const errorMsg = (createError.message || '').toLowerCase();
          
          if (errorCode === 'auth/email-already-in-use' || 
              errorCode === 'auth/emailAlreadyInUse' ||
              errorMsg.includes('already in use') ||
              errorMsg.includes('email already exists')) {
            emailExists = true;
            console.log('✓ Account EXISTS (email-already-in-use)');
          } else {
            emailExists = false;
            console.log('✗ Account does NOT exist (error: ' + errorCode + ')');
          }
        }
        
        // Close modal
        closeLoginModal();
        
        // Build redirect URL with return parameter
        const returnParam = currentReturnUrl ? `&return=${encodeURIComponent(currentReturnUrl)}` : '';
        
        // Route based on whether email has an account
        if (emailExists) {
          console.log('→ Redirecting to SIGNIN page (account exists)');
          window.location.replace(`signin.html?email=${encodeURIComponent(email)}${returnParam}`);
        } else {
          console.log('→ Redirecting to SIGNUP page (account does not exist)');
          window.location.replace(`signup.html?email=${encodeURIComponent(email)}${returnParam}`);
        }
      } catch (error) {
        console.error('Error checking email:', error);
        // Re-enable button on error
        if (continueBtn) {
          continueBtn.disabled = false;
          continueBtn.value = 'Continue';
        }
        // On error, default to signup
        const returnParam = currentReturnUrl ? `&return=${encodeURIComponent(currentReturnUrl)}` : '';
        closeLoginModal();
        window.location.replace(`signup.html?email=${encodeURIComponent(email)}${returnParam}`);
      }
    });
  }

  // Setup form handler when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(setupFormHandler, 100);
    });
  } else {
    setTimeout(setupFormHandler, 100);
  }

  // Close modal when clicking outside
  document.addEventListener('click', function(event) {
    const overlay = document.getElementById('loginModalOverlay');
    if (overlay && event.target === overlay) {
      closeLoginModal();
    }
  });

  // Close modal with ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const overlay = document.getElementById('loginModalOverlay');
      if (overlay && overlay.classList.contains('active')) {
        closeLoginModal();
      }
    }
  });
})();

