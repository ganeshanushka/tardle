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
        <button class="login-modal-close" onclick="closeLoginModal()">×</button>
        
        <!-- Email Step -->
        <div id="loginModalEmailStep" class="login-modal-step">
          <h1>Log in or create an account</h1>
          <form id="loginModalEmailForm">
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

        <!-- Sign In Step -->
        <div id="loginModalSigninStep" class="login-modal-step" style="display: none;">
          <h1>Welcome back!</h1>
          <p style="font-size: 1.1em; margin-top: -5px; margin-bottom: 20px; text-align: center;">Enter your password to log in.</p>
          <form id="loginModalSigninForm">
            <div class="login-modal-input-group">
              <label for="loginModalSigninEmail">Email Address</label>
              <div style="display: flex; gap: 8px; align-items: center;">
                <input type="email" id="loginModalSigninEmail" name="email" readonly required style="flex: 1; background-color: #f5f5f5;">
                <button type="button" class="login-modal-edit-btn" id="loginModalEditEmailBtn" onclick="loginModalGoBackToEmail()">Edit</button>
              </div>
            </div>
            <div class="login-modal-input-group">
              <label for="loginModalSigninPassword">Password</label>
              <div style="position: relative;">
                <input type="password" id="loginModalSigninPassword" name="password" required style="width: 100%; padding-right: 40px;">
                <button type="button" class="login-modal-password-toggle" id="loginModalSigninPasswordToggle" onclick="loginModalTogglePassword('loginModalSigninPassword', 'loginModalSigninPasswordToggle')">
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
            By continuing, you agree to the updated <a href="privacy-policy.html">Terms of Service</a>, 
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
                <button type="button" class="login-modal-edit-btn" id="loginModalSignupEditEmailBtn" onclick="loginModalGoBackToEmail()">Edit</button>
              </div>
            </div>
            <div class="login-modal-input-group">
              <label for="loginModalSignupPassword">Password</label>
              <div style="position: relative;">
                <input type="password" id="loginModalSignupPassword" name="password" required maxlength="128" style="width: 100%; padding-right: 40px;">
                <button type="button" class="login-modal-password-toggle" id="loginModalSignupPasswordToggle" onclick="loginModalTogglePassword('loginModalSignupPassword', 'loginModalSignupPasswordToggle')">
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
            By continuing, you agree to the updated <a href="privacy-policy.html">Terms of Service</a>, 
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
      
      .login-modal-step p {
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
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
        font-family: 'PT Serif', serif;
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
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
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
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
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
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
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
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
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
        color: #d32f2f;
        font-size: 14px;
        margin-top: 8px;
        font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
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
    }
  }

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
      
      // Check if email exists
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
        
        let emailExistsCheck = false;
        
        try {
          const dummyPassword = 'DummyCheck123!@#';
          await window.firebaseAuthFunctions.createUserWithEmailAndPassword(window.firebaseAuth, email, dummyPassword);
          emailExistsCheck = false;
          
          // Delete the account we just created
          const user = window.firebaseAuth.currentUser;
          if (user) {
            try {
              await user.delete();
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
            emailExistsCheck = true;
          }
        }
        
        // Store state and show next step
        currentEmail = email;
        emailExists = emailExistsCheck;
        
        // Show appropriate step
        if (emailExists) {
          // Pre-fill email in signin form
          const signinEmailInput = document.getElementById('loginModalSigninEmail');
          if (signinEmailInput) signinEmailInput.value = email;
          showStep('signin');
          setTimeout(() => {
            const passwordInput = document.getElementById('loginModalSigninPassword');
            if (passwordInput) passwordInput.focus();
          }, 100);
        } else {
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
        if (continueBtn) {
          continueBtn.disabled = false;
          continueBtn.value = 'Continue';
        }
        alert('Error checking email. Please try again.');
      }
    });
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
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.value = 'Log in';
        }
        
        // Show error
        if (errorDiv) {
          if (error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-login-credentials') {
            errorDiv.textContent = 'Wrong password. Try again.';
          } else if (error.code === 'auth/user-not-found') {
            errorDiv.textContent = 'No account found with this email address.';
          } else {
            errorDiv.textContent = 'Wrong password. Try again.';
          }
          errorDiv.style.display = 'block';
          passwordInput.value = '';
          passwordInput.focus();
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
      
      // Validate username
      if (!username) {
        if (errorDiv) {
          errorDiv.textContent = 'Please enter your username.';
          errorDiv.style.display = 'block';
        }
        return;
      }
      
      // Validate password
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
      
      // Disable submit button
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
        
        // Create user account
        const userCredential = await window.firebaseAuthFunctions.createUserWithEmailAndPassword(window.firebaseAuth, email, password);
        const user = userCredential.user;
        
        // Send verification email
        await window.firebaseAuthFunctions.sendEmailVerification(user);
        
        // Close modal and redirect to verification page
        closeLoginModal();
        window.location.href = 'verify-email.html';
      } catch (error) {
        console.error('Sign up error:', error);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.value = 'Create account';
        }
        
        // Show error
        if (errorDiv) {
          if (error.code === 'auth/email-already-in-use' || error.code === 'auth/emailAlreadyInUse') {
            errorDiv.textContent = 'Email already in use. Please sign in instead.';
            // Switch to signin step
            setTimeout(() => {
              emailExists = true;
              showStep('signin');
              const signinEmailInput = document.getElementById('loginModalSigninEmail');
              if (signinEmailInput) signinEmailInput.value = email;
            }, 2000);
          } else {
            errorDiv.textContent = 'Error creating account. Please try again.';
          }
          errorDiv.style.display = 'block';
        }
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
