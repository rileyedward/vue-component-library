<script setup lang="ts">
import { ref } from 'vue';
import UiDatePicker from '@/components/forms/datepicker/ui-datepicker.vue';
import { Calendar, Clock, MapPin } from 'lucide-vue-next';

const basicDate = ref<Date | null>(null);
const preselectedDate = ref<Date | null>(new Date());
const minMaxDate = ref<Date | null>(null);
const disabledDatesSelection = ref<Date | null>(null);
const enabledDatesSelection = ref<Date | null>(null);
const readonlyDate = ref<Date | null>(new Date());
const disabledDate = ref<Date | null>(new Date());
const errorDate = ref<Date | null>(null);
const formDate = ref<Date | null>(null);

// Date constraints
const minDate = new Date();
minDate.setDate(minDate.getDate() - 7); // 7 days ago

const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 30); // 30 days from now

// Disabled dates (weekends)
const disabledDates = ref<Date[]>([]);

// Generate disabled dates for next 30 days (weekends)
const generateDisabledDates = () => {
  const dates = [];
  const today = new Date();

  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    // Disable weekends (Saturday = 6, Sunday = 0)
    if (date.getDay() === 0 || date.getDay() === 6) {
      dates.push(new Date(date));
    }
  }

  return dates;
};

disabledDates.value = generateDisabledDates();

// Enabled dates (only specific days)
const enabledDates = ref<Date[]>([]);

// Generate specific enabled dates
const generateEnabledDates = (): Date[] => {
  const dates: Date[] = [];
  const today = new Date();

  // Enable specific dates: today, +3 days, +7 days, +14 days
  [0, 3, 7, 14, 21].forEach(dayOffset => {
    const date = new Date(today);
    date.setDate(today.getDate() + dayOffset);
    dates.push(new Date(date));
  });

  return dates;
};

enabledDates.value = generateEnabledDates();

const handleDateChange = (date: Date | null) => {
  console.log('Date changed:', date);
};

const handleOpen = () => {
  console.log('DatePicker opened');
};

const handleClose = () => {
  console.log('DatePicker closed');
};

const resetDate = (dateRef: Ref<Date | null>) => {
  dateRef.value = null;
};

const setToday = (dateRef: Ref<Date | null>) => {
  dateRef.value = new Date();
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">DatePicker Component</h1>
      <p class="text-gray-600">
        A powerful date picker component with calendar popup, date constraints, and various
        customization options.
      </p>
    </header>

    <div class="space-y-12">
      <!-- Basic DatePicker -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Basic DatePicker</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-date-picker
            v-model="basicDate"
            label="Basic DatePicker"
            placeholder="Select a date..."
            helper-text="Choose any date from the calendar"
            @change="handleDateChange"
            @open="handleOpen"
            @close="handleClose"
          />
          <ui-date-picker
            v-model="preselectedDate"
            label="Pre-selected Date"
            helper-text="This datepicker has a default value"
          />
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <p class="text-sm text-gray-600">
              Basic Date: {{ basicDate ? basicDate.toDateString() : 'Not selected' }}
            </p>
            <div class="flex gap-2">
              <button
                class="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                @click="setToday(basicDate)"
              >
                Set Today
              </button>
              <button
                class="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                @click="resetDate(basicDate)"
              >
                Clear
              </button>
            </div>
          </div>
          <div class="space-y-2">
            <p class="text-sm text-gray-600">
              Pre-selected: {{ preselectedDate ? preselectedDate.toDateString() : 'Not selected' }}
            </p>
          </div>
        </div>
      </section>

      <!-- DatePicker Variants -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">DatePicker Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ui-date-picker
            v-model="basicDate"
            variant="default"
            label="Default"
            placeholder="Default variant..."
          />
          <ui-date-picker
            v-model="basicDate"
            variant="outlined"
            label="Outlined"
            placeholder="Outlined variant..."
          />
          <ui-date-picker
            v-model="basicDate"
            variant="filled"
            label="Filled"
            placeholder="Filled variant..."
          />
        </div>
      </section>

      <!-- DatePicker Sizes -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">DatePicker Sizes</h2>
        <div class="space-y-4">
          <ui-date-picker
            v-model="basicDate"
            size="sm"
            label="Small"
            placeholder="Small datepicker..."
          />
          <ui-date-picker
            v-model="basicDate"
            size="md"
            label="Medium"
            placeholder="Medium datepicker..."
          />
          <ui-date-picker
            v-model="basicDate"
            size="lg"
            label="Large"
            placeholder="Large datepicker..."
          />
        </div>
      </section>

      <!-- DatePicker with Icons -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">DatePicker with Icons</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-date-picker
            v-model="basicDate"
            label="Appointment Date"
            placeholder="Select appointment date..."
            :prefix-icon="Clock"
            helper-text="Choose your preferred appointment date"
          />
          <ui-date-picker
            v-model="basicDate"
            label="Event Location Date"
            placeholder="Select event date..."
            :prefix-icon="MapPin"
            helper-text="When is your event?"
          />
        </div>
      </section>

      <!-- Date Constraints -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Date Constraints</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-date-picker
            v-model="minMaxDate"
            label="Date Range (7 days ago to 30 days from now)"
            placeholder="Select within range..."
            :min-date="minDate"
            :max-date="maxDate"
            helper-text="You can only select dates within the specified range"
          />
          <ui-date-picker
            v-model="basicDate"
            label="Future Dates Only"
            placeholder="Select future date..."
            :min-date="new Date()"
            helper-text="Only future dates are selectable"
          />
        </div>
        <div class="mt-4">
          <p class="text-sm text-gray-600">
            Range Date: {{ minMaxDate ? minMaxDate.toDateString() : 'Not selected' }}
          </p>
        </div>
      </section>

      <!-- Disabled and Enabled Dates -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Disabled and Enabled Dates</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-date-picker
            v-model="disabledDatesSelection"
            label="Weekends Disabled"
            placeholder="Select weekday..."
            :disabled-dates="disabledDates"
            helper-text="Weekends are disabled for the next 30 days"
          />
          <ui-date-picker
            v-model="enabledDatesSelection"
            label="Specific Dates Only"
            placeholder="Select enabled date..."
            :enabled-dates="enabledDates"
            helper-text="Only specific dates are enabled"
          />
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <p class="text-sm text-gray-600">
            Weekday Date:
            {{ disabledDatesSelection ? disabledDatesSelection.toDateString() : 'Not selected' }}
          </p>
          <p class="text-sm text-gray-600">
            Enabled Date:
            {{ enabledDatesSelection ? enabledDatesSelection.toDateString() : 'Not selected' }}
          </p>
        </div>
      </section>

      <!-- DatePicker States -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">DatePicker States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-date-picker
            v-model="disabledDate"
            label="Disabled"
            disabled
            helper-text="This datepicker is disabled"
          />
          <ui-date-picker
            v-model="readonlyDate"
            label="Readonly"
            readonly
            helper-text="This datepicker is readonly"
          />
          <ui-date-picker
            v-model="errorDate"
            label="Error State"
            placeholder="This has an error..."
            error-text="Please select a valid date"
            required
          />
          <ui-date-picker
            v-model="basicDate"
            label="Required Field"
            placeholder="This is required..."
            required
            helper-text="This field is required"
          />
        </div>
      </section>

      <!-- Different Week Start -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Week Start Options</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ui-date-picker
            v-model="basicDate"
            label="Week Starts Sunday (Default)"
            placeholder="Sunday first..."
            :first-day-of-week="0"
            helper-text="Calendar week starts on Sunday"
          />
          <ui-date-picker
            v-model="basicDate"
            label="Week Starts Monday"
            placeholder="Monday first..."
            :first-day-of-week="1"
            helper-text="Calendar week starts on Monday"
          />
        </div>
      </section>

      <!-- Full Width DatePicker -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Full Width DatePicker</h2>
        <ui-date-picker
          v-model="basicDate"
          label="Full Width DatePicker"
          placeholder="This datepicker takes the full width..."
          full-width
          :prefix-icon="Calendar"
          helper-text="This datepicker spans the full width of its container"
        />
      </section>

      <!-- Form Example -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Form Example</h2>
        <form class="space-y-6" @submit.prevent="console.log('Form submitted!', formDate)">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ui-date-picker
              v-model="formDate"
              label="Birth Date"
              placeholder="Select birth date..."
              :max-date="new Date()"
              required
              :error-text="!formDate ? 'Birth date is required' : undefined"
            />
            <ui-date-picker
              v-model="basicDate"
              label="Appointment Date"
              placeholder="Select appointment..."
              :prefix-icon="Clock"
              :min-date="new Date()"
              helper-text="Choose a future date for your appointment"
            />
          </div>
          <ui-date-picker
            v-model="basicDate"
            label="Event Date"
            placeholder="Select event date..."
            :prefix-icon="Calendar"
            full-width
            :min-date="new Date()"
            helper-text="When will your event take place?"
          />
          <div class="flex justify-end">
            <button
              type="submit"
              class="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors disabled:opacity-50"
              :disabled="!formDate"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      <!-- Advanced Examples -->
      <section class="bg-white rounded-lg shadow-sm border p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-6">Advanced Examples</h2>
        <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ui-date-picker
              v-model="basicDate"
              label="Business Days Only"
              placeholder="Select business day..."
              :disabled-dates="disabledDates"
              helper-text="Weekends are automatically excluded"
            />
            <ui-date-picker
              v-model="basicDate"
              label="Next 30 Days"
              placeholder="Select within 30 days..."
              :min-date="new Date()"
              :max-date="maxDate"
              helper-text="Limited to next 30 days"
            />
          </div>

          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="font-medium text-gray-900 mb-2">Selected Dates Summary:</h3>
            <ul class="text-sm text-gray-600 space-y-1">
              <li>Basic Date: {{ basicDate ? basicDate.toLocaleDateString() : 'Not selected' }}</li>
              <li>Form Date: {{ formDate ? formDate.toLocaleDateString() : 'Not selected' }}</li>
              <li>
                Range Date: {{ minMaxDate ? minMaxDate.toLocaleDateString() : 'Not selected' }}
              </li>
              <li>
                Weekday Date:
                {{
                  disabledDatesSelection
                    ? disabledDatesSelection.toLocaleDateString()
                    : 'Not selected'
                }}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
