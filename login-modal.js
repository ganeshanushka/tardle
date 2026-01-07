// Reusable Login Modal Component - Handles complete login/signup flow
// Usage: Call openLoginModal(returnUrl) to open the modal

(function() {
  'use strict';

  // Modal state
  let currentReturnUrl = null;
  let currentEmail = null;
  let emailExists = false;
  let currentStep = 'email'; // 'email', 'signin', 'signup'

  // Create modal HTML structure
  const modalHTML = `
    <div class="login-modal-overlay" id="loginModalOverlay">
      <div class="login-modal-container">
        <button class="login-modal-close" id="loginModalCloseBtn">×</button>
        
        <!-- Email Step -->
        <div id="loginModalEmailStep" class="login-modal-step">
          <h1>Log in or create an account</h1>
          <form id="loginModalEmailForm">
            <div class="login-modal-input-group">
              <label for="loginModalEmail">Email Address</label>
              <input type="email" id="loginModalEmail" name="email" required autocomplete="email">
              <div class="login-modal-error" id="loginModalEmailError" style="display: none;"></div>
            </div>
            <div class="login-modal-input-group">
              <input type="submit" id="loginModalContinueBtn" value="Continue">
            </div>
          </form>
          <p class="login-modal-terms">
            By continuing, you agree to the updated <a href="terms-of-service.html">Terms of Service</a>, 
            and <a href="privacy-policy.html">Privacy Policy</a>.
          </p>
        </div>

        <!-- Sign In Step -->
        <div id="loginModalSigninStep" class="login-modal-step" style="display: none;">
          <h1>Welcome back!</h1>
          <p style="font-size: 1.1em; margin-top: -5px; margin-bottom: 20px; text-align: center;">Enter your password to log in.</p>
          <form id="loginModalSigninForm">
            <div class="login-modal-input-group">
              <label for="loginModalSigninEmail">Email Address</label>
              <div style="display: flex; gap: 8px; align-items: center;">
                <input type="email" id="loginModalSigninEmail" name="email" readonly required style="flex: 1; background-color: #f5f5f5;">
                <button type="button" class="login-modal-edit-btn" id="loginModalEditEmailBtn">Edit</button>
              </div>
            </div>
            <div class="login-modal-input-group">
              <label for="loginModalSigninPassword">Password</label>
              <div style="position: relative;">
                <input type="password" id="loginModalSigninPassword" name="password" required style="width: 100%; padding-right: 40px;">
                <button type="button" class="login-modal-password-toggle" id="loginModalSigninPasswordToggle">
                  <svg id="loginModalSigninEyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
              <div class="login-modal-error" id="loginModalSigninError" style="display: none;"></div>
            </div>
            <div class="login-modal-input-group">
              <input type="submit" id="loginModalSigninBtn" value="Log in">
            </div>
          </form>
          <p class="login-modal-terms">
            By continuing, you agree to the updated <a href="terms-of-service.html">Terms of Service</a>, 
            and <a href="privacy-policy.html">Privacy Policy</a>.
          </p>
        </div>

        <!-- Sign Up Step -->
        <div id="loginModalSignupStep" class="login-modal-step" style="display: none;">
          <h1>Create an account</h1>
          <form id="loginModalSignupForm">
            <div class="login-modal-input-group">
              <label for="loginModalSignupUsername">Username</label>
              <input type="text" id="loginModalSignupUsername" name="username" required>
            </div>
            <div class="login-modal-input-group">
              <label for="loginModalSignupEmail">Email</label>
              <div style="display: flex; gap: 8px; align-items: center;">
                <input type="email" id="loginModalSignupEmail" name="email" readonly required style="flex: 1; background-color: #f5f5f5;">
                <button type="button" class="login-modal-edit-btn" id="loginModalSignupEditEmailBtn">Edit</button>
              </div>
            </div>
            <div class="login-modal-input-group">
              <label for="loginModalSignupPassword">Password</label>
              <div style="position: relative;">
                <input type="password" id="loginModalSignupPassword" name="password" required maxlength="128" style="width: 100%; padding-right: 40px;">
                <button type="button" class="login-modal-password-toggle" id="loginModalSignupPasswordToggle">
                  <svg id="loginModalSignupEyeIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
              </div>
              <div style="font-size: 12px; color: #666; margin-top: 5px;">
                Password must be 8-20 characters and contain uppercase, lowercase, and a number.
              </div>
              <div class="login-modal-error" id="loginModalSignupError" style="display: none;"></div>
            </div>
            <div class="login-modal-input-group">
              <input type="submit" id="loginModalSignupBtn" value="Create account">
            </div>
          </form>
          <p class="login-modal-terms">
            By continuing, you agree to the updated <a href="terms-of-service.html">Terms of Service</a>, 
            and <a href="privacy-policy.html">Privacy Policy</a>.
          </p>
        </div>
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
        background-color: rgba(0, 0, 0, 0.5);
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
        max-height: 90vh;
        overflow-y: auto;
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
        font-family: 'Field Gothic Narrow', sans-serif;
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
        font-family: 'Field Gothic Narrow', sans-serif;
      }
      
      .login-modal-step p {
        font-family: 'Field Gothic Narrow', sans-serif;
      }
      
      .login-modal-input-group {
        margin-bottom: 16px;
      }
      
      .login-modal-input-group label {
        display: block;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: #000;
        font-family: 'Field Gothic Narrow', sans-serif;
        text-align: left;
      }
      
      .login-modal-input-group input[type="email"],
      .login-modal-input-group input[type="text"],
      .login-modal-input-group input[type="password"] {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-family: 'Field Gothic Narrow', sans-serif;
      }
      
      .login-modal-input-group input:focus {
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
        font-family: 'Field Gothic Narrow', sans-serif;
        margin-top: 8px;
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
        text-align: center;
        margin-top: 24px;
        margin-bottom: 0;
        line-height: 1.5;
        font-family: 'Field Gothic Narrow', sans-serif;
      }
      
      .login-modal-terms a {
        text-decoration: underline;
        color: #1a73e8;
      }
      
      .login-modal-edit-btn {
        padding: 8px 12px;
        background: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        white-space: nowrap;
        font-family: 'Field Gothic Narrow', sans-serif;
      }
      
      .login-modal-edit-btn:hover {
        background-color: #f5f5f5;
      }
      
      .login-modal-password-toggle {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .login-modal-error {
        color: red;
        font-size: 0.9rem;
        margin-top: 0.25em;
        margin-bottom: 1em;
        font-family: 'Field Gothic Narrow', sans-serif;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        min-height: 20px;
        line-height: 1.4;
      }
      
      .login-modal-error:empty {
        display: none !important;
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
      // Setup form handlers after modal HTML is injected
      setTimeout(setupFormHandlers, 50);
    } else {
      // Modal already exists, ensure handlers are set up
      setTimeout(setupFormHandlers, 50);
    }
  }
  
  // Global validation function that can be called from anywhere
  window.validateLoginModalEmail = function() {
    const emailInput = document.getElementById('loginModalEmail');
    const emailError = document.getElementById('loginModalEmailError');
    const continueBtn = document.getElementById('loginModalContinueBtn');
    
    if (!emailInput) {
      console.warn('validateLoginModalEmail: emailInput not found');
      return;
    }
    
    const email = emailInput.value.trim().toLowerCase();
    console.log('validateLoginModalEmail: checking email:', email);
    
    if (email.endsWith('.edu')) {
      console.log('validateLoginModalEmail: .edu email detected, showing error');
      if (emailError) {
        emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
        // Remove inline style that might be hiding it
        emailError.removeAttribute('style');
        emailError.style.display = 'block';
        emailError.style.visibility = 'visible';
        emailError.style.opacity = '1';
        emailError.style.color = '#d32f2f';
        emailError.classList.add('show');
        // Force a reflow to ensure display change takes effect
        emailError.offsetHeight;
        console.log('validateLoginModalEmail: error element updated, display:', emailError.style.display, 'text:', emailError.textContent, 'computed display:', window.getComputedStyle(emailError).display);
      } else {
        console.error('validateLoginModalEmail: emailError element not found!');
      }
      if (continueBtn) {
        continueBtn.disabled = true;
        console.log('validateLoginModalEmail: continue button disabled');
      } else {
        console.error('validateLoginModalEmail: continueBtn element not found!');
      }
    } else {
      if (emailError) {
        if (emailError.textContent.includes('.edu')) {
          emailError.textContent = '';
          emailError.style.display = 'none';
          emailError.classList.remove('show');
        }
      }
      if (continueBtn && email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          continueBtn.disabled = false;
        }
      }
    }
  };

  // Toggle password visibility
  window.loginModalTogglePassword = function(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(inputId.replace('Password', 'EyeIcon'));
    if (input && icon) {
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      if (type === 'text') {
        icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
      } else {
        icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
      }
    }
  };

  // Go back to email step
  window.loginModalGoBackToEmail = function() {
    showStep('email');
  };

  // Show specific step
  function showStep(step) {
    // CRITICAL: Block signup step if email is .edu
    if (step === 'signup' && currentEmail && currentEmail.toLowerCase().endsWith('.edu')) {
      console.log('❌ Blocking signup step - .edu email detected');
      const emailError = document.getElementById('loginModalEmailError');
      if (emailError) {
        emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
        emailError.removeAttribute('style');
        emailError.style.display = 'block';
        emailError.style.visibility = 'visible';
        emailError.style.opacity = '1';
        emailError.style.color = '#d32f2f';
      }
      // Force back to email step
      step = 'email';
      const continueBtn = document.getElementById('loginModalContinueBtn');
      if (continueBtn) {
        continueBtn.disabled = true;
      }
    }
    
    currentStep = step;
    document.getElementById('loginModalEmailStep').style.display = step === 'email' ? 'block' : 'none';
    document.getElementById('loginModalSigninStep').style.display = step === 'signin' ? 'block' : 'none';
    document.getElementById('loginModalSignupStep').style.display = step === 'signup' ? 'block' : 'none';
  }

  // Open modal function
  window.openLoginModal = function(returnUrl, prefillEmail) {
    initModal();
    currentReturnUrl = returnUrl || null;
    currentEmail = prefillEmail || null;
    currentStep = 'email';
    
    const overlay = document.getElementById('loginModalOverlay');
    const emailInput = document.getElementById('loginModalEmail');
    
    // Reset to email step
    showStep('email');
    
    if (overlay) {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Pre-fill email if provided
      if (prefillEmail && emailInput) {
        emailInput.value = prefillEmail;
      }
      
      // Focus email input and validate - multiple attempts to catch all scenarios
      const validateAndFocus = () => {
        if (emailInput) {
          // Use global validation function
          if (typeof window.validateLoginModalEmail === 'function') {
            window.validateLoginModalEmail();
          }
          
          // Also trigger input event to ensure validation runs
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
          emailInput.dispatchEvent(new Event('change', { bubbles: true }));
          
          emailInput.focus();
          if (prefillEmail) {
            try {
              emailInput.setSelectionRange(prefillEmail.length, prefillEmail.length);
            } catch (e) {
              // Email inputs don't support setSelectionRange - that's ok
            }
          }
        }
      };
      
      // Validate immediately
      setTimeout(validateAndFocus, 100);
      // Validate again after handlers are set up
      setTimeout(validateAndFocus, 300);
      // Final validation after everything is ready
      setTimeout(validateAndFocus, 500);
    }
  };

  // Close modal function
  window.closeLoginModal = function() {
    const overlay = document.getElementById('loginModalOverlay');
    if (overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      
      // Reset all forms
      const forms = ['loginModalEmailForm', 'loginModalSigninForm', 'loginModalSignupForm'];
      forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) form.reset();
      });
      
      // Reset state
      currentEmail = null;
      emailExists = false;
      currentStep = 'email';
      showStep('email');
    }
  };

  // Validate password for signup
  function validatePassword(password) {
    const requirements = {
      length: password.length >= 8 && password.length <= 20,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password)
    };
    
    const missing = [];
    if (!requirements.length) {
      if (password.length < 8) {
        missing.push('at least 8 characters');
      } else if (password.length > 20) {
        missing.push('no more than 20 characters');
      }
    }
    if (!requirements.uppercase) missing.push('an uppercase letter');
    if (!requirements.lowercase) missing.push('a lowercase letter');
    if (!requirements.number) missing.push('a number');
    
    return {
      isValid: Object.values(requirements).every(req => req === true),
      missing: missing
    };
  }

  // Handle email form submission
  function setupEmailFormHandler() {
    const form = document.getElementById('loginModalEmailForm');
    if (!form) return;
    
    // Remove existing listeners
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
    
    newForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Check if button is disabled (e.g., .edu email detected)
      const continueBtn = document.getElementById('loginModalContinueBtn');
      if (continueBtn && continueBtn.disabled) {
        console.log('Form submission blocked - button is disabled');
        return;
      }
      
      // Also check email before submitting
      const emailInput = document.getElementById('loginModalEmail');
      if (emailInput) {
        const email = emailInput.value.trim().toLowerCase();
        if (email.endsWith('.edu')) {
          const emailError = document.getElementById('loginModalEmailError');
          if (emailError) {
            emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
            emailError.removeAttribute('style');
            emailError.style.display = 'block';
            emailError.style.visibility = 'visible';
            emailError.style.opacity = '1';
            emailError.style.color = '#d32f2f';
          }
          return;
        }
      }
      
      handleEmailSubmit();
    });
    
    // Also handle button click as backup - EXACT from login.html
    const continueBtn = document.getElementById('loginModalContinueBtn');
    if (continueBtn) {
      continueBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Check if button is disabled
        if (this.disabled) {
          console.log('Button click blocked - button is disabled');
          return;
        }
        
        // Also check email before submitting
        const emailInput = document.getElementById('loginModalEmail');
        if (emailInput) {
          const email = emailInput.value.trim().toLowerCase();
          if (email.endsWith('.edu')) {
            const emailError = document.getElementById('loginModalEmailError');
            if (emailError) {
              emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
              emailError.style.display = 'block';
            }
            return;
          }
        }
        
        console.log('Button clicked');
        newForm.dispatchEvent(new Event('submit'));
      });
    }
    
    // Add real-time email validation for .edu emails
    const emailInput = document.getElementById('loginModalEmail');
    const emailError = document.getElementById('loginModalEmailError');
    const continueBtnRef = document.getElementById('loginModalContinueBtn');
    
    // Function to validate email and show/hide error
    function validateEmailInput() {
      // Use global validation function if available, otherwise use local logic
      if (typeof window.validateLoginModalEmail === 'function') {
        window.validateLoginModalEmail();
        return;
      }
      
      // Fallback local validation
      if (!emailInput) return;
      
      const email = emailInput.value.trim().toLowerCase();
      
      // Check if email ends with .edu
      if (email.endsWith('.edu')) {
        // Show error immediately
        if (emailError) {
          emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
          emailError.style.display = 'block';
          emailError.style.visibility = 'visible';
        }
        // Disable continue button
        if (continueBtnRef) {
          continueBtnRef.disabled = true;
        }
      } else {
        // Clear error if not .edu
        if (emailError) {
          if (emailError.textContent.includes('.edu')) {
            emailError.style.display = 'none';
          }
        }
        // Enable continue button if email is valid format
        if (continueBtnRef && email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(email)) {
            continueBtnRef.disabled = false;
          }
        }
      }
    }
    
    if (emailInput) {
      // Validate on every input change (as user types)
      emailInput.addEventListener('input', validateEmailInput);
      
      // Also validate on blur (when user leaves the field)
      emailInput.addEventListener('blur', validateEmailInput);
      
      // Validate on paste
      emailInput.addEventListener('paste', function() {
        // Wait for paste to complete, then validate
        setTimeout(validateEmailInput, 10);
      });
      
      // Validate on change (for autofill)
      emailInput.addEventListener('change', validateEmailInput);
      
      // Validate immediately if email is already filled (e.g., from autofill or pre-fill)
      if (emailInput.value) {
        setTimeout(validateEmailInput, 100);
      }
    }
  }

  // Handle email form submission (extracted to function for reuse)
  async function handleEmailSubmit() {
    const emailInput = document.getElementById('loginModalEmail');
    const continueBtn = document.getElementById('loginModalContinueBtn');
    
    if (!emailInput) return;
    
    const email = emailInput.value.trim();
    
    // CRITICAL: Check .edu FIRST before any other processing
    if (email.toLowerCase().endsWith('.edu')) {
      console.log('❌ .edu email detected - blocking submission');
      const emailError = document.getElementById('loginModalEmailError');
      if (emailError) {
        emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
        emailError.style.display = 'block';
      }
      if (continueBtn) {
        continueBtn.disabled = true;
      }
      emailInput.focus();
      return; // CRITICAL: Stop here, don't proceed
    }
      
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      const emailError = document.getElementById('loginModalEmailError');
      if (emailError) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
      } else {
        alert('Please enter a valid email address');
      }
      emailInput.focus();
      return;
    }
      
    // Clear any error messages
    const emailError = document.getElementById('loginModalEmailError');
    if (emailError) {
      emailError.style.display = 'none';
    }
      
      // Disable submit button
      if (continueBtn) {
        continueBtn.disabled = true;
        continueBtn.value = 'Checking...';
      }
      
      // Check if email exists - EXACT logic from login.html
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
        
        // Check if email exists in Firebase
        // Use createUserWithEmailAndPassword - it gives us a clear error if email exists
        let emailExistsCheck = false;
        
        try {
          const dummyPassword = 'DummyCheck123!@#';
          await window.firebaseAuthFunctions.createUserWithEmailAndPassword(window.firebaseAuth, email, dummyPassword);
          
          // If we get here, account was created (didn't exist before)
          emailExistsCheck = false;
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
          console.log('Create account check error code:', createError.code);
          console.log('Create account check error message:', createError.message);
          
          const errorCode = createError.code;
          const errorMsg = (createError.message || '').toLowerCase();
          
          // Check if email is already in use - this is the most reliable indicator
          if (errorCode === 'auth/email-already-in-use' || 
              errorCode === 'auth/emailAlreadyInUse' ||
              errorMsg.includes('already in use') ||
              errorMsg.includes('email already exists')) {
            // Account exists!
            emailExistsCheck = true;
            console.log('✓ Account EXISTS (email-already-in-use)');
          } else {
            // Any other error - assume account doesn't exist
            emailExistsCheck = false;
            console.log('✗ Account does NOT exist (error: ' + errorCode + ')');
          }
        }
        
        // Route based on whether email has an account
        console.log('=== FINAL ROUTING DECISION ===');
        console.log('Email:', email);
        console.log('emailExists:', emailExistsCheck);
        
        // CRITICAL: Double-check .edu before showing any step
        if (email.toLowerCase().endsWith('.edu')) {
          console.log('❌ .edu email detected after Firebase check - blocking');
          const emailError = document.getElementById('loginModalEmailError');
          if (emailError) {
            emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
            emailError.style.display = 'block';
          }
          // Go back to email step
          showStep('email');
          if (continueBtn) {
            continueBtn.disabled = true;
          }
          return; // Don't proceed to signin/signup
        }
        
        // Store state and show next step
        currentEmail = email;
        emailExists = emailExistsCheck;
        
        // Show appropriate step
        if (emailExistsCheck) {
          console.log('→ Showing SIGNIN step (account exists)');
          // Pre-fill email in signin form
          const signinEmailInput = document.getElementById('loginModalSigninEmail');
          if (signinEmailInput) signinEmailInput.value = email;
          showStep('signin');
          setTimeout(() => {
            const passwordInput = document.getElementById('loginModalSigninPassword');
            if (passwordInput) passwordInput.focus();
          }, 100);
        } else {
          console.log('→ Showing SIGNUP step (account does not exist)');
          // Pre-fill email in signup form
          const signupEmailInput = document.getElementById('loginModalSignupEmail');
          if (signupEmailInput) signupEmailInput.value = email;
          showStep('signup');
          setTimeout(() => {
            const usernameInput = document.getElementById('loginModalSignupUsername');
            if (usernameInput) usernameInput.focus();
          }, 100);
        }
        
        // Re-enable button
        if (continueBtn) {
          continueBtn.disabled = false;
          continueBtn.value = 'Continue';
        }
      } catch (error) {
        console.error('Error checking email:', error);
        // Re-enable button on error
        if (continueBtn) {
          continueBtn.disabled = false;
          continueBtn.value = 'Continue';
        }
        // On error, check if .edu before defaulting to signup
        if (email.toLowerCase().endsWith('.edu')) {
          console.log('❌ .edu email detected in error handler - blocking');
          const emailError = document.getElementById('loginModalEmailError');
          if (emailError) {
            emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
            emailError.style.display = 'block';
          }
          // Stay on email step
          showStep('email');
          if (continueBtn) {
            continueBtn.disabled = true;
            continueBtn.value = 'Continue';
          }
          return;
        }
        
        // On error, default to signup (safer than assuming account exists)
        // BUT ONLY if not .edu email (already checked above)
        currentEmail = email;
        emailExists = false;
        const signupEmailInput = document.getElementById('loginModalSignupEmail');
        if (signupEmailInput) signupEmailInput.value = email;
        showStep('signup');
        setTimeout(() => {
          const usernameInput = document.getElementById('loginModalSignupUsername');
          if (usernameInput) usernameInput.focus();
        }, 100);
      }
  }

  // Handle signin form submission
  function setupSigninFormHandler() {
    const form = document.getElementById('loginModalSigninForm');
    if (!form) return;
    
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
    
    newForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('loginModalSigninEmail');
      const passwordInput = document.getElementById('loginModalSigninPassword');
      const submitBtn = document.getElementById('loginModalSigninBtn');
      const errorDiv = document.getElementById('loginModalSigninError');
      
      if (!emailInput || !passwordInput) return;
      
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      
      // Hide error
      if (errorDiv) errorDiv.style.display = 'none';
      
      // Validate email format with regex - EXACT from signin.html
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        if (errorDiv) {
          errorDiv.textContent = 'Please enter a valid email address';
          errorDiv.style.display = 'block';
        }
        return;
      }
      
      // Disable submit button
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.value = 'Logging in...';
      }
      
      try {
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
        
        // Sign in with Firebase
        const userCredential = await window.firebaseAuthFunctions.signInWithEmailAndPassword(window.firebaseAuth, email, password);
        const user = userCredential.user;
        await user.reload();
        
        // Check email verification
        if (!user.emailVerified) {
          closeLoginModal();
          window.location.href = 'verify-email.html';
          return;
        }
        
        // Success - close modal and reload or redirect
        closeLoginModal();
        if (currentReturnUrl) {
          window.location.href = currentReturnUrl;
        } else {
          window.location.reload();
        }
      } catch (error) {
        console.error('Sign in error:', error);
        console.error('Error code:', error.code);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.value = 'Log in';
        }
        
        // Show error - EXACT error handling from signin.html
        if (errorDiv) {
          errorDiv.style.display = 'block';
          if (error.code === 'auth/user-not-found') {
            errorDiv.textContent = 'No account found with this email address.';
          } else if (error.code === 'auth/wrong-password' || 
                     error.code === 'auth/invalid-credential' || 
                     error.code === 'auth/invalid-login-credentials') {
            // Match the error message from delete account page
            errorDiv.textContent = 'Wrong password. Try again.';
            // Clear password field on wrong password
            passwordInput.value = '';
            passwordInput.focus();
          } else if (error.code === 'auth/invalid-email') {
            errorDiv.textContent = 'Invalid email address. Please enter a valid email.';
          } else {
            // For any other error, show a generic message
            errorDiv.textContent = 'Wrong password. Try again.';
            // Clear password field
            passwordInput.value = '';
            passwordInput.focus();
          }
        }
      }
    });
  }

  // Handle signup form submission
  function setupSignupFormHandler() {
    const form = document.getElementById('loginModalSignupForm');
    if (!form) return;
    
    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);
    
    newForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const usernameInput = document.getElementById('loginModalSignupUsername');
      const emailInput = document.getElementById('loginModalSignupEmail');
      const passwordInput = document.getElementById('loginModalSignupPassword');
      const submitBtn = document.getElementById('loginModalSignupBtn');
      const errorDiv = document.getElementById('loginModalSignupError');
      
      if (!usernameInput || !emailInput || !passwordInput) return;
      
      const username = usernameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      
      // Hide error
      if (errorDiv) errorDiv.style.display = 'none';
      
      // Validate all required fields are filled - EXACT from signup.html
      // Validate username
      if (!username) {
        if (errorDiv) {
          errorDiv.textContent = 'Please enter your username.';
          errorDiv.style.display = 'block';
        }
        return;
      }
      
      // CRITICAL: Check .edu FIRST before any other validation
      if (email.toLowerCase().endsWith('.edu')) {
        console.log('❌ .edu email detected in signup form - blocking');
        if (errorDiv) {
          errorDiv.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
          errorDiv.style.display = 'block';
        }
        // Go back to email step
        showStep('email');
        // Show error on email step too
        const emailError = document.getElementById('loginModalEmailError');
        if (emailError) {
          emailError.textContent = 'We currently do not support .edu email addresses. Please use a different email address.';
          emailError.style.display = 'block';
        }
        const continueBtn = document.getElementById('loginModalContinueBtn');
        if (continueBtn) {
          continueBtn.disabled = true;
        }
        return;
      }
      
      // Validate email format with regex - EXACT from signup.html
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email)) {
        if (errorDiv) {
          errorDiv.textContent = 'Please enter a valid email address.';
          errorDiv.style.display = 'block';
        }
        return;
      }
      
      // Validate password requirements - EXACT validation from signup.html
      if (!password) {
        if (errorDiv) {
          errorDiv.textContent = 'Please enter a password.';
          errorDiv.style.display = 'block';
        }
        return;
      }
      
      if (password.length > 128) {
        if (errorDiv) {
          errorDiv.textContent = 'Password must be 128 characters or less.';
          errorDiv.style.display = 'block';
        }
        return;
      }
      
      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        if (errorDiv) {
          const missingList = passwordValidation.missing;
          let errorText = 'Password must contain ';
          if (missingList.length === 1) {
            errorText += missingList[0] + '.';
          } else if (missingList.length === 2) {
            errorText += missingList[0] + ' and ' + missingList[1] + '.';
          } else {
            errorText += missingList.slice(0, -1).join(', ') + ', and ' + missingList[missingList.length - 1] + '.';
          }
          errorDiv.textContent = errorText;
          errorDiv.style.display = 'block';
        }
        return;
      }
      
      // Show loading state on button - EXACT from signup.html
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.value = 'Creating account...';
      }
      
      try {
        await new Promise((resolve) => {
          if (window.firebaseAuthFunctions && window.firebaseFirestoreFunctions) {
            resolve();
          } else {
            const checkInterval = setInterval(() => {
              if (window.firebaseAuthFunctions && window.firebaseFirestoreFunctions) {
                clearInterval(checkInterval);
                resolve();
              }
            }, 100);
          }
        });
        
        // Store username and email in localStorage to pass to verify-email.html
        // Use localStorage instead of sessionStorage for better persistence
        localStorage.setItem('pendingUsername', username);
        localStorage.setItem('pendingVerificationEmail', email);
        console.log('💾 Stored username in localStorage:', username);
        
        // Create user account with Firebase Auth
        const userCredential = await window.firebaseAuthFunctions.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
        
        // User created successfully
        const user = userCredential.user;
        console.log('User account created and logged in:', user.email);
        
        // Store username in Firestore temporarily (persists across devices/browsers)
        // This is more reliable than localStorage alone
        try {
          const pendingUsernameRef = window.firebaseFirestoreFunctions.doc(window.firebaseDb, 'pendingUsernames', user.uid);
          console.log('💾 Storing username in Firestore pendingUsernames:', username, 'for UID:', user.uid);
          await window.firebaseFirestoreFunctions.setDoc(pendingUsernameRef, {
            username: username,
            email: email,
            createdAt: window.firebaseFirestoreFunctions.serverTimestamp()
          });
          console.log('✓ Username stored in Firestore for verification');
          
          // Verify it was stored correctly
          const verifyDoc = await window.firebaseFirestoreFunctions.getDoc(pendingUsernameRef);
          if (verifyDoc.exists()) {
            console.log('✓ Verified: Username stored correctly in Firestore:', verifyDoc.data().username);
          } else {
            console.error('❌ ERROR: Username was not stored in Firestore!');
          }
        } catch (firestoreError) {
          console.error('❌ Error storing username in Firestore:', firestoreError);
          console.error('❌ Error details:', firestoreError.message, firebaseError.code);
          // Continue even if this fails - we still have localStorage as backup
        }
        
        // Send verification email using Firebase Auth (free, built-in) - EXACT logic from signup.html
        try {
          console.log('Sending verification email to:', email);
          // Get the correct URL for GitHub Pages
          const currentPath = window.location.pathname;
          const pathParts = currentPath.split('/').filter(p => p);
          
          // Remove the current filename and add verify-email.html
          if (pathParts.length > 0) {
            pathParts[pathParts.length - 1] = 'verify-email.html';
          } else {
            pathParts.push('verify-email.html');
          }
          
          // Set continueUrl to index.html - Firebase will redirect here after verification
          const continueUrl = window.location.origin + '/' + (pathParts.length > 1 ? pathParts.slice(0, -1).join('/') + '/' : '') + 'index.html';
          
          const actionCodeSettings = {
            url: continueUrl,
            handleCodeInApp: false
          };
          console.log('Action code settings:', actionCodeSettings);
          await window.firebaseAuthFunctions.sendEmailVerification(user, actionCodeSettings);
          console.log('✓ Verification email sent successfully');
        } catch (emailError) {
          console.error('✗ Error sending verification email:', emailError);
          // Show user-friendly error
          if (emailError.code === 'auth/too-many-requests') {
            alert('Too many verification emails sent. Please wait a few minutes and try again from the verification page.');
          } else if (emailError.code === 'auth/missing-continue-uri') {
            alert('Email verification is not properly configured. Please contact support.');
          } else {
            alert('Could not send verification email. Error: ' + (emailError.message || emailError.code || 'Unknown error') + '\n\nYou can request a new email on the verification page.');
          }
        }
        
        // Email already stored above with username
        
        // Small delay to ensure auth state is set
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // CRITICAL: Ensure email is stored in localStorage (should already be done above, but double-check)
        if (!localStorage.getItem('pendingVerificationEmail')) {
          localStorage.setItem('pendingVerificationEmail', email);
          console.log('✓ Stored email in localStorage before redirect (fallback):', email);
        }
        
        // Close modal and redirect to verification page with email in URL
        closeLoginModal();
        window.location.href = `verify-email.html?email=${encodeURIComponent(email)}`;
      } catch (error) {
        console.error('Sign up error:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        
        // If email is already in use, automatically switch to sign in step
        // Check for both possible error code formats - EXACT logic from signup.html
        if (error.code === 'auth/email-already-in-use' || 
            error.code === 'auth/emailAlreadyInUse' ||
            error.message && error.message.toLowerCase().includes('already in use')) {
          console.log('Email already exists, switching to sign in step immediately');
          emailExists = true;
          showStep('signin');
          const signinEmailInput = document.getElementById('loginModalSigninEmail');
          if (signinEmailInput) signinEmailInput.value = email;
          setTimeout(() => {
            const passwordInput = document.getElementById('loginModalSigninPassword');
            if (passwordInput) passwordInput.focus();
          }, 100);
          return;
        }
        
        // Provide helpful error messages for other errors - EXACT messages from signup.html
        let errorMsg = 'Error creating account. Please try again.';
        
        if (error.code === 'auth/configuration-not-found') {
          errorMsg = 'Email/Password authentication is not enabled in Firebase. Please enable it in Firebase Console → Authentication → Sign-in method.';
        } else if (error.code === 'auth/weak-password') {
          errorMsg = 'Password is too weak. Please use a stronger password.';
        } else if (error.code === 'auth/invalid-email') {
          errorMsg = 'Invalid email address. Please enter a valid email.';
        } else if (error.message) {
          errorMsg = error.message;
        }
        
        if (errorDiv) {
          errorDiv.textContent = errorMsg;
          errorDiv.style.display = 'block';
        }
        
        // Remove loading state on error
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.value = 'Create account';
        }
        
        // Log error details for debugging
        console.error('Full error object:', error);
        console.error('Error stack:', error.stack);
      }
    });
  }

  // Setup all form handlers
  function setupFormHandlers() {
    setupEmailFormHandler();
    setupSigninFormHandler();
    setupSignupFormHandler();
  }

  // Setup form handlers when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      if (document.getElementById('loginModalEmailForm')) {
        setTimeout(setupFormHandlers, 100);
      }
      
      // Set up button event listeners (Safari/Chrome compatible)
      const loginModalCloseBtn = document.getElementById('loginModalCloseBtn');
      if (loginModalCloseBtn) {
        loginModalCloseBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          closeLoginModal();
        });
      }
      
      const loginModalEditEmailBtn = document.getElementById('loginModalEditEmailBtn');
      if (loginModalEditEmailBtn) {
        loginModalEditEmailBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          loginModalGoBackToEmail();
        });
      }
      
      const loginModalSignupEditEmailBtn = document.getElementById('loginModalSignupEditEmailBtn');
      if (loginModalSignupEditEmailBtn) {
        loginModalSignupEditEmailBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          loginModalGoBackToEmail();
        });
      }
      
      const loginModalSigninPasswordToggle = document.getElementById('loginModalSigninPasswordToggle');
      if (loginModalSigninPasswordToggle) {
        loginModalSigninPasswordToggle.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          loginModalTogglePassword('loginModalSigninPassword', 'loginModalSigninPasswordToggle');
        });
      }
      
      const loginModalSignupPasswordToggle = document.getElementById('loginModalSignupPasswordToggle');
      if (loginModalSignupPasswordToggle) {
        loginModalSignupPasswordToggle.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          loginModalTogglePassword('loginModalSignupPassword', 'loginModalSignupPasswordToggle');
        });
      }
    });
  } else {
    if (document.getElementById('loginModalEmailForm')) {
      setTimeout(setupFormHandlers, 100);
    }
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
