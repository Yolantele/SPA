export interface BookingTypes {
  scheduledStart: string
  scheduledDuration: number
  imageUrl: string
  otherUserFullName: string
}

export const enum BookingStatusTypes {
  Requested = 0,
  Accepted = 1,
  CompletedNotPaid = 2,
  Rejected = 3,
  CompletedAndPaid = 4,
  Cancelled = 5,
  Bidded = 6,
  BiddedTooLate = 7,
  WithdrewBid = 8,
  PendingInterviews = 9,
  LongTermBookingsCreated = 10
}
export interface BookingSummary {
  id: string
  parentId: string
  bookingStatus: any
  requestStatus?: any
  scheduledStart: Date
  scheduledDuration: Number
  imageUrl: string
  otherUserFullName: string
  lookingForVolunteer?: any
  length?: any
  map?: any
}
export interface ActiveBookingSummary {
  requestedBookings: any
  confirmedBookings: BookingSummary
}
export interface IBooking {
  id: string
  bookingProcess: any
  scheduledStart: Date
  scheduledDateTime: string
  bookingStatus: any
  scheduledDuration: number
  specialRequirements: string
  parent: {
    id: string
    referralCodeNumber?: number
    firstName: string
    lastName: string
    profileImageUrl: string

    fullName?: string
    mobileNumber?: string
    address?: {
      houseNo: string
      street: string
      town: string
      postcode: string
    }
  }
  sitterRequests: any
  bookedSitter: any
}

export interface IUser {
  id?: string
  email: string
  firstName: string
  lastName: string
  accountType: any
  address?: {
    houseNo: string
    street: string
    town: string
    postcode: string
  }
  profileImageUrl?: string
  hourlyRate?: number
  specialHourlyRate?: number
  numberOfChildren?: number
  children?: any
  hasPets?: string
  hasWifi?: boolean
  hasNetflix?: boolean
  hasTV?: boolean
  parking?: any
  allergies?: any
  otherAllergies?: string
  biography?: string
  referralCodeNumber?: number
  mobileNumber?: string
  secondaryMobileNumbers?: string[]
  passwordResetCode?: string
  approvalStatus?: any
  premiumUser?: boolean
  bookingsCompleted?: {
    total: number
    postajob: number

    shortlist: number
    longterm: number
    volunteered: number
  }
  numberOfReviews?: {
    total: number
    positive: number
    negative: number
  }
}
